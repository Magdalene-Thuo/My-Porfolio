import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Helmet } from 'react-helmet-async';

const ProjectsPage: React.FC = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const projects = [
    {
      title: 'Virtual Assistance Training Program',
      description: 'Comprehensive training on email/calendar management, client communication, and online work platforms.',
      image: '/lovable-uploads/45ad4e95-476b-4644-b582-d92c7c6f38c8.png',
      role: 'Lead Trainer & Curriculum Designer',
      tools: ['Google Workspace', 'Zoom', 'Trello'],
      result: '90% of participants felt confident to start VA careers.',
      featured: true,
    },
    {
      title: 'Graphic Design with Canva',
      description: 'Delivered at TUK, CUEA, and UON. Practical sessions teaching design principles and hands-on use of Canva tools.',
      image: '/lovable-uploads/bdc2ae2e-2568-4448-9309-aec2638e3b0f.png',
      role: 'Facilitator & Designer',
      tools: ['Canva', 'Google Slides'],
      result: '40+ trainees created their first design portfolio.',
    },
    {
      title: 'Data Analysis with Excel, Python, and Power BI',
      description: 'Full curriculum with downloadable resources and video tutorials covering core to advanced data analysis workflows.',
      image: '/lovable-uploads/40be38d1-54ee-4468-98fc-eb04456c33b6.png',
      role: 'Trainer & Content Creator',
      tools: ['Excel', 'Python', 'Power BI'],
      result: 'Improved participants\' productivity and employability.',
    },
    {
      title: 'Digital Marketing Training Programs',
      description: '50+ trainings delivered across universities, NGOs, and community groups focusing on strategy, content, and ads.',
      image: '/lovable-uploads/32d54e78-d39b-41b2-8f95-5d8a835bfb55.png',
      role: 'Trainer',
      tools: ['Canva', 'Facebook Ads', 'Instagram', 'Google Workspace'],
      result: 'Many trainees started or grew their businesses using these skills.',
      liveUrl: 'https://youtu.be/ZoE5NXyzm_s?si=0RcLOVsaK2jaxFTr',
    },
    {
      title: 'AI for Software Engineering',
      description: 'Practical sessions on Python, HTML, and CSS—including building chatbots and automation demos.',
      image: '/lovable-uploads/4367c7e5-3fbd-4143-8664-99426e441155.png',
      role: 'Trainer',
      tools: ['Python', 'HTML', 'CSS'],
      result: 'Participants built functional chatbots and prototypes.',
    },
    {
      title: 'AI in Graphic Design Presentation',
      description: 'Training on AI tools for design, including practical prompt examples.',
      image: '/lovable-uploads/bd071b19-8026-4e8e-85e8-3443223023a2.png',
      role: 'Speaker & Trainer',
      tools: ['MidJourney', 'Canva'],
    },
    {
      title: 'Women-Only Training Initiative',
      description: 'Empowering girls from marginalized communities with digital skills.',
      image: '/lovable-uploads/bdc2ae2e-2568-4448-9309-aec2638e3b0f.png',
      role: 'Program Lead',
      tools: ['Canva', 'Google Workspace'],
      result: 'Increased online work opportunities for participants.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Magdalene Thuo Portfolio</title>
        <meta name="description" content="Training programs, workshops, and digital products delivered by Magdalene Thuo." />
        <link rel="canonical" href={`${origin}/projects`} />
      </Helmet>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark mb-6">
              Project Portfolio
            </h1>
            <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
            <p className="text-lg text-portfolio-text/80">
              A curated selection of trainings, programs, and initiatives with measurable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                role={project.role}
                tools={project.tools}
                result={project.result}
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
