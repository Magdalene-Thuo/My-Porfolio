
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark mb-6">
              Get In Touch
            </h1>
            <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
            <p className="text-lg text-portfolio-text/80">
              Have a project idea or need assistance with curriculum development, graphic design, or digital training? Let's connect!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-heading font-bold mb-6 text-portfolio-dark">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
            
            <div>
              <div className="bg-portfolio-dark rounded-lg shadow-md p-8 text-white">
                <h2 className="text-2xl font-heading font-bold mb-4">Services</h2>
                <p className="text-gray-300 mb-4">
                  Specializing in curriculum development, graphic design, and digital training for professionals looking to upskill and succeed online.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                  <li>Customized curriculum development</li>
                  <li>Professional graphic design</li>
                  <li>Digital skills training</li>
                  <li>One-on-one mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactPage;
