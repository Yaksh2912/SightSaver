import React from 'react';
import '../assets/styles/Features.css';
import { FaDiagnoses, FaProjectDiagram, FaServer, FaHeadphones, FaNetworkWired, FaMedkit } from 'react-icons/fa';

const featureData = [
  {
    icon: <FaDiagnoses />,
    title: 'Disease Detection',
    description: 'Automated diagnostics of illnesses like Glaucoma, Diabetic Retinopathy and more.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Correlation',
    description: 'Predictive analysis framework for disease correlation.',
  },
  {
    icon: <FaServer />,
    title: 'Client-Server Architecture',
    description: 'Centralized service network for diagnostics.',
  },
  {
    icon: <FaHeadphones />,
    title: 'Reach & Support',
    description: 'Agile deployment for max hospital and research access.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Connectivity',
    description: 'Remote camp connectivity for diagnosis and data.',
  },
  {
    icon: <FaMedkit />,
    title: 'Ecosystem',
    description: 'Support for a complete diagnostic ecosystem for doctors.',
  }
];

const Features = () => {
  return (
    <div>
      <section className="features-wrapper">
        <div className="features-grid">
          {featureData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <a className="feature-link" href="#">Read More &rsaquo;</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
