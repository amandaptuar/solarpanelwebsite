import React from 'react';
import './TechOpsPage.css';
import Hero from '../components/TechOps/Hero/Hero';
import WarehouseAdvantage from '../components/TechOps/WarehouseAdvantage/WarehouseAdvantage';
import StatsBar from '../components/TechOps/StatsBar/StatsBar';
import Features from '../components/TechOps/Features/Features';
import CaseStudy from '../components/TechOps/CaseStudy/CaseStudy';
import CTA from '../components/TechOps/CTA/CTA';

const TechOpsPage = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      <Hero />
      <WarehouseAdvantage />
      <StatsBar />
      <Features />
      <CaseStudy />
      <CTA />
    </div>
  );
};

export default TechOpsPage;
