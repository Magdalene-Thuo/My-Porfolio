
import React from 'react';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  const skills = [
    "Digital Training Facilitation", "Curriculum Development", "Program Coordination",
    "Youth Mentorship", "Training Needs Assessment", "Workshop and Event Organization",
    "Technical Support", "Data Entry and Analysis", "Content Writing",
    "Google Workspace", "Business Coaching", "Virtual Assistance"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-text/80">
            Passionate about empowering professionals through digital skills training
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-portfolio-text mb-6">
              Passionate and dedicated Digital Trainer with extensive experience in empowering the youth through the Ajira Digital Program. As the Lead Ajira Digital Trainer, I have been instrumental in developing and implementing effective training programs that bridge the digital skills gap and create opportunities for young people to thrive in the digital economy.
            </p>
            <p className="text-portfolio-text mb-6">
              My expertise lies in curriculum development, training facilitation, mentorship, and program coordination, ensuring that every training session is impactful and aligns with the needs of our participants.
            </p>
            <p className="text-portfolio-text">
              I am always eager to connect with like-minded professionals and explore opportunities to drive digital literacy and economic empowerment. Let's connect and discuss how we can collaborate to make a positive impact in the digital training landscape.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-portfolio-light p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl mb-4 text-portfolio-dark">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Business Information Technology, Information Technology</p>
                  <p className="text-sm text-portfolio-text/70">The Technical University of Kenya, 2015-2019</p>
                  <p className="text-sm italic">Grade: Second Class (Upper Division)</p>
                </li>
                <li>
                  <p className="font-medium">AiCE - AI Career Essentials Certificate</p>
                  <p className="text-sm text-portfolio-text/70">alx_africa, Jul 2024</p>
                </li>
                <li>
                  <p className="font-medium">Virtual Assistance</p>
                  <p className="text-sm text-portfolio-text/70">alx_africa, Oct 2024</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-portfolio-light p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl mb-4 text-portfolio-dark">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Lead Digital Trainer - Ajira Digital</p>
                  <p className="text-sm text-portfolio-text/70">eMobilis Mobile Technology Institute, Apr 2022-Present</p>
                </li>
                <li>
                  <p className="font-medium">Ajira Digital Trainer</p>
                  <p className="text-sm text-portfolio-text/70">eMobilis Mobile Technology Institute, Apr 2020-Present</p>
                </li>
                <li>
                  <p className="font-medium">Data Entry Clerk</p>
                  <p className="text-sm text-portfolio-text/70">Fairmont The Norfolk, Jan 2020-Mar 2020</p>
                </li>
                <li>
                  <p className="font-medium">Intern</p>
                  <p className="text-sm text-portfolio-text/70">ICT Authority, Jul 2019-Dec 2019</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading font-bold text-xl mb-6 text-center text-portfolio-dark">Key Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} className="bg-portfolio-accent/20 text-portfolio-dark hover:bg-portfolio-accent/30">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
