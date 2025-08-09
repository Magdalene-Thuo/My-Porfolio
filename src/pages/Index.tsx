
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </>
  );
};

export default Home;
