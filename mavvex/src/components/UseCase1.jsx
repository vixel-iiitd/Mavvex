import React, { useState } from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(135deg, #38404F, #2D3E4E, #253743, #162736, #0B1F2E, #121A27, #17121F);
  background-size: 500% 500%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  position: relative;
  overflow: hidden;
`;



const CircleItem = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #fff;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: circleItem 6s linear infinite;
  transform: ${(props) => `rotate(${props.degrees}deg) translate(280px) rotate(-${props.degrees}deg)`};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => `rotate(${props.degrees}deg) translate(0px) rotate(-${props.degrees}deg) scale(2)`};
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  
  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 1.5s;
  }

  &:nth-child(3) {
    animation-delay: 3s;
  }

  &:nth-child(4) {
    animation-delay: 4.5s;
  }
`;

const CircleLabel = styled.div`
  font-size: 1.5rem;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  transition: color 0.3s ease-in-out;
  padding: 20px;

  &:hover {
    font-size: 1rem; // Keep the font size same for hovered state
  }
`;



const CircleIcon = styled.i`
  font-size: 4rem;
`;



const TechCircle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [    { label: 'AI-based product development', icon: 'fas fa-laptop-code', degrees: 0 },    { label: 'Data-privacy and security', icon: 'fas fa-tablet-alt', degrees: 90 },    { label: 'Machine unlearning', icon: 'fas fa-mobile-alt', degrees: 180 },    { label: 'Conversational AI', icon: 'fas fa-microchip', degrees: 270 },  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getLabel = (index) => {
    switch (index) {
      case 0:
        return 'Providing end-to-end services to develop deep technology-based products for various industries.';
      case 1:
        return 'Building products that use AI and deep technology to enable data-privacy and security.';
      case 2:
        return 'Developing products that allow users to remove specific data points from a machine learning model.';
      case 3:
        return 'Providing conversational AI solutions to enhance businesses language model capabilities.';
      default:
        return '';
    }
  };

  return (
    <CircleContainer>
       <CircleLabel style={{ fontSize: '3rem', color: hoveredIndex === null ? '#fff' : '#1a1a1a' }}>Why Mavvex ?</CircleLabel>
      {items.map((item, index) => (
        <CircleItem
          degrees={item.degrees}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <CircleIcon className={item.icon} />
          <CircleLabel>{hoveredIndex === index ? getLabel(index) : item.label}</CircleLabel>
        </CircleItem>
      ))}
    </CircleContainer>
  );
};

export default TechCircle;
