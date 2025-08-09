
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js and MongoDB. Features include product catalog, shopping cart, user authentication, payment processing, and order management.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing personal and team tasks. Built with React and Firebase, featuring real-time updates, task assignment, due dates, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2000&auto=format&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      title: "Personal Finance Dashboard",
      description: "An application to help users track expenses, create budgets and visualize spending patterns. Built with Vue.js and Chart.js.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      tags: ["Vue.js", "Chart.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      title: "Weather Application",
      description: "A weather forecast application that provides current and 5-day forecast data based on user's location or search query. Uses OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2000&auto=format&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript", "REST API"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      title: "Recipe Finder",
      description: "A web application that helps users find recipes based on available ingredients. Features include filtering by dietary restrictions and cuisine type.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
      tags: ["React", "TypeScript", "CSS Modules"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark mb-6">
              My Projects
            </h1>
            <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
            <p className="text-lg text-portfolio-text/80">
              A collection of my recent work spanning web development, design, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ProjectsPage;
