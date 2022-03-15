import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  background: grey;
  border: none;
`;

const CalculatorInput = styled.input``;

const Calculator = () => {
  return (
    <div>
      <CalculatorInput />
      <StyledButton>1</StyledButton>
      <StyledButton>2</StyledButton>
      <StyledButton>3</StyledButton>
      <StyledButton>4</StyledButton>
      <StyledButton>5</StyledButton>
      <StyledButton>6</StyledButton>
      <StyledButton>7</StyledButton>
      <StyledButton>8</StyledButton>
      <StyledButton>9</StyledButton>
      <StyledButton>0</StyledButton>
      <StyledButton>+</StyledButton>
      <StyledButton>-</StyledButton>
      <StyledButton>/</StyledButton>
      <StyledButton>=</StyledButton>
    </div>
  );
};

export default Calculator;
