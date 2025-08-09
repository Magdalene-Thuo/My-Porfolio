
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
      image: '/placeholder.svg',
      role: 'Lead Trainer & Curriculum Designer',
      tools: ['Google Workspace', 'Zoom', 'Trello'],
      result: '90% of participants felt confident to start VA careers.',
      featured: true,
    },
    {
      title: 'Graphic Design with Canva',
      description: 'Delivered at TUK, CUEA, and UON. Practical sessions teaching design principles and hands-on use of Canva tools.',
      image: '/placeholder.svg',
      role: 'Facilitator & Designer',
      tools: ['Canva', 'Google Slides'],
      result: '40+ trainees created their first design portfolio.',
    },
    {
      title: 'Data Analysis with Excel, Python, and Power BI',
      description: 'Full curriculum with downloadable resources and video tutorials covering core to advanced data analysis workflows.',
      image: '/placeholder.svg',
      role: 'Trainer & Content Creator',
      tools: ['Excel', 'Python', 'Power BI'],
      result: 'Improved participants’ productivity and employability.',
    },
    {
      title: 'Digital Marketing Training Programs',
      description: '50+ trainings delivered across universities, NGOs, and community groups focusing on strategy, content, and ads.',
      image: '/placeholder.svg',
      role: 'Trainer',
      tools: ['Canva', 'Facebook Ads', 'Instagram', 'Google Workspace'],
      result: 'Many trainees started or grew their businesses using these skills.',
    },
    {
      title: 'AI for Software Engineering',
      description: 'Practical sessions on Python, HTML, and CSS—including building chatbots and automation demos.',
      image: '/placeholder.svg',
      role: 'Trainer',
      tools: ['Python', 'HTML', 'CSS'],
      result: 'Participants built functional chatbots and prototypes.',
    },
    {
      title: 'AI in Graphic Design Presentation',
      description: 'Training on AI tools for design, including practical prompt examples.',
      image: '/placeholder.svg',
      role: 'Speaker & Trainer',
      tools: ['MidJourney', 'Canva'],
    },
    {
      title: 'Women-Only Training Initiative',
      description: 'Empowering girls from marginalized communities with digital skills.',
      image: '/placeholder.svg',
      role: 'Program Lead',
      tools: ['Canva', 'Google Workspace'],
      result: 'Increased online work opportunities for participants.',
    },
    {
      title: 'Impact Stories Compilation',
      description: 'Documented participant success stories showing real earnings from online work.',
      image: '/placeholder.svg',
      role: 'Researcher & Editor',
      tools: ['Google Docs', 'Canva'],
      result: '7+ verified success stories compiled.',
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
