
import React from 'react';
import { CheckCircle } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    'Digital Marketing Strategy & Training',
    'Data Entry & Analysis (Excel, Google Sheets)',
    'Basic AI for Graphic Design',
    'Virtual Assistance & Administrative Support',
    'Web Development Basics Training',
    'Content Creation & Social Media Strategy',
    'Freelance Career Coaching (Fiverr, Upwork, U-Test, etc.)',
  ];

  return (
    <section className="py-20 bg-portfolio-light/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Core Skills</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-text/80">
            Clean, practical, and outcomes-driven training across digital disciplines
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <ul className="space-y-4">
            {skills.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-portfolio-accent mt-1" size={22} />
                <span className="text-lg text-portfolio-dark font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
