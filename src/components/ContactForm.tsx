
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition"
          placeholder="Project Inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition resize-none"
          placeholder="Hello, I'd like to discuss a potential project..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary flex items-center gap-2"
      >
        {isSubmitting ? 'Sending...' : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
