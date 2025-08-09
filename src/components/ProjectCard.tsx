
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  role?: string;
  tools?: string[];
  result?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  role,
  tools = [],
  result,
  liveUrl,
  repoUrl,
  featured = false,
}) => {
  return (
    <div className={`portfolio-card ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={`${title} project – training and impact`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-portfolio-accent text-white text-xs font-bold px-3 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-2 text-portfolio-dark">{title}</h3>
        
        <p className="text-portfolio-text/80 mb-4">{description}</p>

        {role && (
          <p className="text-sm text-portfolio-text/70 mb-2"><span className="font-semibold text-portfolio-dark">Role:</span> {role}</p>
        )}
        
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="bg-portfolio-light px-2 py-1 rounded-full text-xs font-medium text-portfolio-text/70"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {result && (
          <p className="text-sm text-portfolio-text/80"><span className="font-semibold text-portfolio-dark">Result/Impact:</span> {result}</p>
        )}
        
        <div className="flex gap-4 mt-4">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-portfolio-accent hover:text-portfolio-dark transition-colors gap-1"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-portfolio-accent hover:text-portfolio-dark transition-colors gap-1"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
