
import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-portfolio-light via-white to-portfolio-light/80 flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-portfolio-dark">
              <span className="block">Hi, I'm</span>
              <span className="text-portfolio-accent flex items-center gap-2">
                Magdalene Thuo
                <BadgeCheck size={24} className="text-blue-500" />
              </span>
            </h1>
            
            <div className="h-1 w-24 bg-portfolio-accent"></div>
            
            <p className="text-xl md:text-2xl text-portfolio-text/80 max-w-2xl">
              Digital Marketing & Data Analysis Trainer | Tutor | Helping Professionals Upskill & Succeed Online
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 w-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-portfolio-accent/20 transform -translate-x-4 -translate-y-4"></div>
              <div className="absolute inset-0 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white">
                <img 
                  src="/lovable-uploads/e98b4e07-c211-439b-a247-9390ff6c0726.png" 
                  alt="Magdalene Thuo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
