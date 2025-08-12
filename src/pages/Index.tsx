
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FeaturedProjects from '@/components/FeaturedProjects';
import StatsStrip from '@/components/StatsStrip';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Magdalene Thuo',
    jobTitle: 'Lead Digital Trainer, Career Coach',
    url: origin,
    sameAs: [
      'https://linkedin.com/in/magdalene-thuo',
      'https://youtube.com/@TechGirl254',
      'mailto:example@example.com'
    ],
  };

  return (
    <>
      <Helmet>
        <title>Lead Digital Trainer & Career Coach | Magdalene Thuo</title>
        <meta name="description" content="Certified digital trainer and career coach specializing in Digital Marketing, Data Analysis, Graphic Design, and Freelance Skills Training." />
        <link rel="canonical" href={`${origin}/`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <FeaturedProjects />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </>
  );
};

export default Home;
