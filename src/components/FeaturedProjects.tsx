import React from 'react';
import { Link } from 'react-router-dom';

const featured = [
  {
    title: 'Virtual Assistance Training Program',
    image: '/lovable-uploads/45ad4e95-476b-4644-b582-d92c7c6f38c8.png',
    description: 'Practical curriculum on client communication, scheduling, and online work tools.'
  },
  {
    title: 'Data Analysis: Excel, Python & Power BI',
    image: '/lovable-uploads/40be38d1-54ee-4468-98fc-eb04456c33b6.png',
    description: 'From fundamentals to dashboards—real datasets and outcomes.'
  }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section aria-label="Featured projects" className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground">A snapshot of impactful trainings and programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((item) => (
            <article key={item.title} className="portfolio-card">
              <div className="relative overflow-hidden aspect-video">
                <img src={item.image} alt={`${item.title} preview`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Link to="/projects" className="btn-outline">See all projects</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
