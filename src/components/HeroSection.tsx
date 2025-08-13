
import React from 'react';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="block mb-8">Magdalene Thuo</span>
              <span className="text-primary flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-heading">
                Lead Digital Trainer • Career Coach • Digital Marketing & Data Analysis Specialist
                <BadgeCheck size={24} className="text-accent" />
              </span>
            </h1>
            
            <div className="h-1 w-32 bg-primary my-8"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              I’m a certified digital trainer and career coach specializing in Digital Marketing, Data Analysis, Graphic Design, and Freelance Skills Training. I design and deliver practical, outcomes-driven programs that help individuals and organizations thrive online—and turn skills into real opportunities.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-8">
              <Link to="/projects" className="btn-primary flex items-center gap-2" aria-label="View my work">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline" aria-label="Contact me">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 w-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 transform -translate-x-4 -translate-y-4"></div>
              <div className="absolute inset-0 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white">
                <img 
                  src="/lovable-uploads/e98b4e07-c211-439b-a247-9390ff6c0726.png" 
                  alt="Portrait of Magdalene Thuo, Lead Digital Trainer and Career Coach" 
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
