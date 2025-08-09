
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Mail, Youtube } from 'lucide-react';

const ContactPage: React.FC = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  return (
    <>
      <Helmet>
        <title>Contact | Magdalene Thuo</title>
        <meta name="description" content="Contact Magdalene Thuo for digital training, career coaching, and program collaborations." />
        <link rel="canonical" href={`${origin}/contact`} />
      </Helmet>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark mb-6">
              Contact Me
            </h1>
            <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
            <p className="text-lg text-portfolio-text/80">
              Have a project idea or need training and coaching support? Let’s connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-heading font-bold mb-6 text-portfolio-dark">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-portfolio-dark rounded-lg shadow-md p-8 text-white">
                <h2 className="text-2xl font-heading font-bold mb-4">Services</h2>
                <p className="text-gray-300 mb-4">
                  Specializing in curriculum development, digital marketing, data analysis, and hands-on skills training.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                  <li>Customized curriculum development</li>
                  <li>Practical digital skills training</li>
                  <li>Career coaching & mentorship</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-portfolio-dark">Connect</h2>
                <div className="flex items-center gap-4">
                  <a href="https://linkedin.com/in/magdalene-thuo" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:text-portfolio-dark transition-colors" aria-label="LinkedIn">
                    <Linkedin size={28} />
                  </a>
                  <a href="https://youtube.com/@TechGirl254" target="_blank" rel="noopener noreferrer" className="text-portfolio-accent hover:text-portfolio-dark transition-colors" aria-label="YouTube">
                    <Youtube size={28} />
                  </a>
                  <a href="mailto:example@example.com" className="text-portfolio-accent hover:text-portfolio-dark transition-colors" aria-label="Email">
                    <Mail size={28} />
                  </a>
                </div>
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
