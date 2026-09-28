
import React from 'react';
import { Badge } from '@/components/ui/badge';

const focusAreas = [
  "Digital Skills Training", "AI Literacy", "Digital Marketing",
  "Data Analysis & Reporting", "Virtual Assistance", "Graphic Design",
  "Online Work & Freelancing", "Workplace Readiness", "Curriculum Development",
  "Learning & Development", "Program Coordination", "Mentorship"
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Helping people turn digital skills into real opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 transform -translate-x-4 -translate-y-4"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-card shadow-lg">
                <img
                  src={profileImg.url}
                  alt="Magdalene Wangu Thuo, Digital Trainer and Learning Development professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-5 text-foreground/90 leading-relaxed">
            <p>
              I’m Magdalene Wangu Thuo, a Digital Trainer and Learning Development professional passionate
              about helping people turn digital skills into real opportunities.
            </p>
            <p>
              With over 5 years of experience in digital skills training, I have trained more than 5,000 young
              people through virtual and in-person programmes, covering areas such as digital marketing,
              virtual assistance, data analysis, graphic design, AI literacy, online work, and workplace readiness.
            </p>
            <p>
              I also work with data to improve learning and programme outcomes, from collecting and validating
              trainee data to developing reports, dashboards, and insights that support better decision-making.
            </p>
            <p>
              My approach to training is practical, inclusive, and learner-centred. I enjoy simplifying complex
              concepts, creating engaging learning experiences, and helping beginners build the confidence to
              use technology effectively.
            </p>
            <p>
              I’m particularly interested in the intersection of AI, digital learning, data, and future skills —
              and how technology can create more accessible pathways to education, employment, and entrepreneurship.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading font-bold text-xl mb-6 text-center text-foreground">Focus Areas</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {focusAreas.map((skill, index) => (
              <Badge key={index} className="bg-primary/15 text-primary hover:bg-primary/25">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
