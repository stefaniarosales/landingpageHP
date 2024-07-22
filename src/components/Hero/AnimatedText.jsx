import styled from "styled-components";
import React from "react";

const colors = {
    gryffindor: '#7F0909',
    hufflepuff: '#FFC500',
  };
  
  const AnimatedText = styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: ${props => colors[props.color]};
    animation: colorChange 3s alternate 2;
    @keyframes colorChange {
      0% {
        color: ${colors.gryffindor};
      }
      50% {
        color: ${colors.hufflepuff};
      }
      100% {
        color: ${colors.gryffindor};
      }
    }
`;

const HarryPotterText = () => {
    return <AnimatedText color="gryffindor">Harry Potter</AnimatedText>;
};

export default HarryPotterText;