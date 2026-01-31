 import React from 'react';
import ContactHero from '../Components/Contact/ContactHero';
import ContactForm from '../Components/Contact/ContactForm';
import NewsletterSignup from '../Components/Contact/NewsletterSignup';
import ContactInfo from '../Components/Contact/ContactInfo';
 

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ContactHero />
        
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <ContactForm/>
          </div>
          
          <div className="space-y-6">
            <ContactInfo />
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
}