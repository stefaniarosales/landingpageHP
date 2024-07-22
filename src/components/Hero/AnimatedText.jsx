import styled from "styled-components";
import React from "react";

const colors = {
    gryffindor1: '#7F0909',
    gryffindor2: '#FFC500',
  };
  
  const AnimatedText = styled.span`
    font-size: 2rem;
  font-weight: bold;
  color: ${props => props.color};
  animation: colorChange 2s alternate 3;
  @keyframes colorChange {
    0% {
      color: ${colors.gryffindor1};
    }
    50% {
      color: ${colors.gryffindor2};
    }
    100% {
      color: ${colors.gryffindor1};
    }
  }
`;

const HarryPotterText = () => {
    return <AnimatedText color="gryffindor">Harry Potter</AnimatedText>;
};

export default HarryPotterText;