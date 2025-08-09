
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-portfolio-dark text-portfolio-text-light py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Portfolio</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              A showcase of my projects, skills, and professional journey in web development and design.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:example@example.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
