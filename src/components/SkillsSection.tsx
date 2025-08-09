
import React from 'react';
import { Code, Server, Paintbrush, Lightbulb } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code size={32} className="text-portfolio-accent" />,
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend Development",
      icon: <Server size={32} className="text-portfolio-accent" />,
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "UI/UX Design",
      icon: <Paintbrush size={32} className="text-portfolio-accent" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Usability Testing"]
    },
    {
      category: "Other Skills",
      icon: <Lightbulb size={32} className="text-portfolio-accent" />,
      skills: ["Git", "Docker", "CI/CD", "Agile Methodology", "Project Management", "Problem Solving", "Team Collaboration"]
    }
  ];

  return (
    <section className="py-20 bg-portfolio-light/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-text/80">
            My technical expertise and professional skillset
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-heading font-bold ml-3">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-portfolio-light px-3 py-1 rounded-full text-sm font-medium text-portfolio-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
