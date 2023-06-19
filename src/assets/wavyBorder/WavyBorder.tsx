/*
import React from "react";
import styled from "styled-components";

const WavyDiv = styled.div`
  position: relative;
  height: 150px; // Adjust this as needed
  width: 100%;
  overflow: hidden;
`;

const Wave = styled.svg<{ color: string }>`
  position: absolute;
  bottom: 0; // This makes the wave appear at the bottom
  width: 210%;
  height: 150px; // Adjust this as needed
  fill: ${(props) => props.color};
  transform: rotate(180deg); // This rotates the wave to be upside down
`;

interface WavyBorderProps {
  color: string;
}

const WavyBorder: React.FC<WavyBorderProps> = ({ color }) => {
  return (
    <WavyDiv>
      <Wave viewBox="0 0 500 150" preserveAspectRatio="none" color={color}>
        <path d="M-1.41,0.84 C150.99,169.98 349.20,-50.00 501.65,120.73 L500.00,0.00 L0.00,0.00 Z"></path>
      </Wave>
    </WavyDiv>
  );
};

export default WavyBorder;
*/
export {};
