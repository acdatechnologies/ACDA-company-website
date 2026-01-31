from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import re

app = Flask(__name__)

# Configure CORS - Allow your React frontend
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5174", "https://acda.vercel.app"],
        "methods": ["POST", "GET", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# Email configuration
EMAIL_CONFIG = {
    'SMTP_SERVER': os.environ.get('SMTP_SERVER', 'smtp.gmail.com'),
    'SMTP_PORT': int(os.environ.get('SMTP_PORT', 587)),
    'EMAIL_USER': os.environ.get('EMAIL_USER', 'your-email@gmail.com'),
    'EMAIL_PASS': os.environ.get('EMAIL_PASS', 'your-app-password'),
    'BUSINESS_EMAIL': os.environ.get('BUSINESS_EMAIL', 'hello@acda.tech')
}

# Email validation regex
EMAIL_REGEX = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'ACDA Contact API',
        'timestamp': datetime.now().isoformat()
    }), 200

@app.route('/api/send-email', methods=['POST', 'OPTIONS'])
def send_email():
    """Handle contact form submissions"""
    
    # Handle CORS preflight request
    if request.method == 'OPTIONS':
        return jsonify({}), 200
    
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Check if data is provided
        if not data:
            return jsonify({
                'success': False,
                'message': 'No data provided'
            }), 400
        
        # Extract and validate fields
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()
        
        # Validation
        validation_errors = []
        
        if not name:
            validation_errors.append('Name is required')
        
        if not email:
            validation_errors.append('Email is required')
        elif not re.match(EMAIL_REGEX, email):
            validation_errors.append('Invalid email format')
        
        if not message:
            validation_errors.append('Message is required')
        elif len(message) < 10:
            validation_errors.append('Message must be at least 10 characters')
        
        if validation_errors:
            return jsonify({
                'success': False,
                'message': 'Validation failed',
                'errors': validation_errors
            }), 400
        
        print(f" Processing contact form from {name} ({email})")
        
        # Send emails
        try:
            # 1. Send to business
            send_to_business(name, email, message)
            
            # 2. Send auto-reply to user
            send_auto_reply(name, email)
            
            print(f" Email sent successfully for {email}")
            
            return jsonify({
                'success': True,
                'message': 'Message sent successfully! We\'ll reply within 24 hours.',
                'timestamp': datetime.now().isoformat()
            }), 200
            
        except Exception as email_error:
            print(f" Email sending failed: {str(email_error)}")
            return jsonify({
                'success': False,
                'message': 'Failed to send email. Please try again later.'
            }), 500
            
    except Exception as e:
        print(f" Server error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Internal server error'
        }), 500

def send_to_business(name, user_email, user_message):
    """Send email notification to business"""
    
    subject = f" New Contact Form: {name}"
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    # Plain text version
    plain_text = f"""
NEW CONTACT FORM SUBMISSION
===========================

Name: {name}
Email: {user_email}
Time: {timestamp}

Message:
{user_message}

---------------------------
Reply to: {user_email}
"""
    
    # HTML version - Break the string into parts to avoid backslashes in f-string
    html_content = f"""<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ color: #2563eb; font-size: 20px; font-weight: bold; margin-bottom: 20px; }}
        .info-box {{ background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0; }}
        .message-box {{ background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 15px 0; }}
        .action-box {{ background: #dbeafe; padding: 15px; border-radius: 8px; margin-top: 20px; }}
        .label {{ font-weight: bold; color: #374151; }}
    </style>
</head>
<body>
    <div class="header">📧 New Contact Form Submission</div>
    
    <div class="info-box">
        <p><span class="label">👤 Name:</span> {name}</p>
        <p><span class="label">📧 Email:</span> <a href="mailto:{user_email}">{user_email}</a></p>
        <p><span class="label">⏰ Time:</span> {timestamp}</p>
    </div>
    
    <div class="message-box">
        <p><span class="label">💬 Message:</span></p>
        <p>{user_message.replace(chr(10), '<br>').replace(chr(13), '<br>')}</p>
    </div>
    
    <div class="action-box">
        <p><strong>Quick Actions:</strong></p>
        <ul>
            <li><a href="mailto:{user_email}?subject=Re: Your inquiry to ACDA">Reply to {name}</a></li>
            <li>Save to CRM</li>
            <li>Schedule follow-up</li>
        </ul>
    </div>
</body>
</html>"""
    
    # Send the email
    send_email_smtp(
        to_email=EMAIL_CONFIG['BUSINESS_EMAIL'],
        subject=subject,
        plain_text=plain_text,
        html_content=html_content,
        reply_to=user_email
    )

def send_auto_reply(name, user_email):
    """Send auto-reply to the user"""
    
    subject = "Thanks for contacting ACDA!"
    
    # Plain text version
    plain_text = f"""Hi {name},

Thank you for reaching out to ACDA! We've received your message and our team will get back to you within 24 hours.

What to expect next:
• Initial response within 24 hours
• Detailed consultation about your project
• Custom proposal tailored to your needs

In the meantime, you can:
• Browse our services
• Check our portfolio
• Follow us on LinkedIn

If you have any urgent inquiries, feel free to call us at +1 (555) 000-ACDA.

---------------------------

Best regards,
ACDA Team
acda.tech | hello@acda.tech

This is an automated message. Please do not reply to this email.
"""
    
    # HTML version
    html_content = f"""<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }}
        .greeting {{ color: #2563eb; font-size: 18px; font-weight: bold; }}
        .highlight {{ background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }}
        .footer {{ color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }}
    </style>
</head>
<body>
    <p class="greeting">Hi {name},</p>
    
    <p>Thank you for reaching out to ACDA! We've received your message and our team will get back to you within <strong>24 hours</strong>.</p>
    
    <div class="highlight">
        <p><strong>What to expect next:</strong></p>
        <ul>
            <li>Initial response within 24 hours</li>
            <li>Detailed consultation about your project</li>
            <li>Custom proposal tailored to your needs</li>
        </ul>
    </div>
    
    <p>In the meantime, you can:</p>
    <ul>
        <li>Browse our <a href="https://acda.tech/services">services</a></li>
        <li>Check our <a href="https://acda.tech/portfolio">portfolio</a></li>
        <li>Follow us on <a href="#">LinkedIn</a></li>
    </ul>
    
    <p>If you have any urgent inquiries, feel free to call us at <strong>+1 (555) 000-ACDA</strong>.</p>
    
    <div class="footer">
        <p>Best regards,<br>
        <strong>ACDA Team</strong><br>
        <a href="https://acda.tech">acda.tech</a> | hello@acda.tech</p>
        
        <p style="font-size: 12px; color: #9ca3af; margin-top: 10px;">
            This is an automated message. Please do not reply to this email.
        </p>
    </div>
</body>
</html>"""
    
    # Send the email
    send_email_smtp(
        to_email=user_email,
        subject=subject,
        plain_text=plain_text,
        html_content=html_content
    )

def send_email_smtp(to_email, subject, plain_text, html_content=None, reply_to=None):
    """Send email using SMTP"""
    
    # Create message
    msg = MIMEMultipart('alternative')
    msg['From'] = EMAIL_CONFIG['EMAIL_USER']
    msg['To'] = to_email
    msg['Subject'] = subject
    
    if reply_to:
        msg['Reply-To'] = reply_to
    
    # Attach plain text
    msg.attach(MIMEText(plain_text, 'plain'))
    
    # Attach HTML if provided
    if html_content:
        msg.attach(MIMEText(html_content, 'html'))
    
    # Connect to SMTP server and send
    with smtplib.SMTP(EMAIL_CONFIG['SMTP_SERVER'], EMAIL_CONFIG['SMTP_PORT']) as server:
        server.starttls()
        server.login(EMAIL_CONFIG['EMAIL_USER'], EMAIL_CONFIG['EMAIL_PASS'])
        server.send_message(msg)
 

if __name__ == '__main__':
    # Get port from environment or use default
    port = int(os.environ.get('PORT', 5000))
    
    print(f"🚀 ACDA Contact API starting on port {port}")
    print(f"📧 Email configured for: {EMAIL_CONFIG['BUSINESS_EMAIL']}")
    print(f"🌐 CORS enabled for: http://localhost:5174")
    print("=" * 50)
    
    app.run(host='0.0.0.0', port=port, debug=True)