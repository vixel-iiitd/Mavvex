import React, { useState } from "react";
import styled from "styled-components";


const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  top: 15%;
  margin: 0 auto;
  background: linear-gradient(135deg, #00a2e2, #00008b, #ffffff);
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
  border-radius: 10%;
  background-color: #fff;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: circleItem 6s linear infinite;
  transform: ${(props) =>
    `rotate(${props.degrees}deg) translate(${(props.degrees === 0 || props.degrees === 180) ? '350px' : '260px'}) rotate(-${props.degrees}deg)`};
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isTransitioning ? 'none' : 'auto')};

  &:hover {
    transform: ${(props) =>
      `rotate(${props.degrees}deg) translate(0px) rotate(-${props.degrees}deg) scale(2)`};
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    z-index: 1;
    pointer-events: auto;
    font-size: 1rem;
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
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
  padding: 20px;
  transform: ${(props) => (props.hovered ? 'translateY(0)' : 'none')};
  will-change: transform;
  backface-visibility: hidden;
`;

const CircleIcon = styled.i`
  font-size: 4rem;
`;

const TechCircle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const items = [    { label: 'AI-based product development', icon: 'fas fa-laptop-code', degrees: 0 },    { label: 'Data-privacy and security', icon: 'fas fa-tablet-alt', degrees: 90 },    { label: 'Machine unlearning', icon: 'fas fa-mobile-alt', degrees: 180 },    { label: 'Conversational AI', icon: 'fas fa-microchip', degrees: 270 },  ];

  const handleMouseEnter = (index) => {
    setTimeout(() => {
      setHoveredIndex(index);
    }, 500);
    setTransitioning(true);
  };
  
  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredIndex(null);
    }, 3000);
    setTransitioning(false);
  };

  const getLabel = (index) => {
    switch (index) {
      case 0:
        return "Providing end-to-end services to develop deep technology-based products for various industries.";
      case 1:
        return "Building products that use AI and deep technology to enable data-privacy and security.";
      case 2:
        return "Developing products that allow users to remove specific data points from a machine learning model.";
      case 3:
        return 'Providing conversational AI solutions for developing and enhancing the language model capabilities of businesses.';
      default:
        return "";
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
        isTransitioning={transitioning}
        
      >
        <CircleIcon className={item.icon} />
        <CircleLabel hovered={hoveredIndex === index}>
          {hoveredIndex === index ? getLabel(index) : item.label}
        </CircleLabel>
      </CircleItem>
    ))}
    </CircleContainer>
  );
};

export default TechCircle;
