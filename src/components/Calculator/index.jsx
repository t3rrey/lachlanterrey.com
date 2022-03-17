import React, { useRef, useState } from "react";
import styled from "styled-components";

import "./calculator.css";

import { btns, BTN_ACTIONS } from "./btnConfig";

const CalculatorContainer = styled.div`
  padding: 10px;
  height: 650px;
  width: 400px;
  overflow: hidden;
  border-radius: 0px 0px 10px 10px;
  background-color: rgb(0, 39, 46);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

const CalculatorButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const CalculatorButton = styled.button`
  height: 90px;
  width: 90px;
  border: none;
  border-radius: 10px;
  background: rgb(12, 40, 137);
  color: white;
`;

const Calculator = () => {
  const btnsRef = useRef(null);
  const expRef = useRef(null);

  const [expression, setExpression] = useState("");

  const btnClick = (item) => {
    const expDiv = expRef.current;

    if (item.action === BTN_ACTIONS.THEME)
      document.body.classList.toggle("dark");

    if (item.action === BTN_ACTIONS.ADD) {
      addAnimSpan(item.display);

      const oper = item.display !== "x" ? item.display : "*";
      setExpression(expression + oper);
    }

    if (item.action === BTN_ACTIONS.DELETE) {
      expDiv.parentNode.querySelector("div:last-child").innerHTML = "";
      expDiv.innerHTML = "";

      setExpression("");
    }

    if (item.action === BTN_ACTIONS.CALC) {
      if (expression.trim().length <= 0) return;

      expDiv.parentNode.querySelector("div:last-child").remove();

      const cloneNode = expDiv.cloneNode(true);
      expDiv.parentNode.appendChild(cloneNode);

      const transform = `translateY(${
        -(expDiv.offsetHeight + 10) + "px"
      }) scale(0.4)`;

      try {
        let res = eval(expression);

        setExpression(res.toString());
        setTimeout(() => {
          cloneNode.style.transform = transform;
          expDiv.innerHTML = "";
          addAnimSpan(Math.floor(res * 100000000) / 100000000);
        }, 200);
      } catch {
        setTimeout(() => {
          cloneNode.style.transform = transform;
          cloneNode.innerHTML = "Syntax err";
        }, 200);
      } finally {
        console.log("calc complete");
      }
    }
  };

  const addAnimSpan = (content) => {
    const expDiv = expRef.current;
    const span = document.createElement("span");

    span.innerHTML = content;
    span.style.opacity = "0";
    expDiv.appendChild(span);

    const width = span.offsetWidth + "px";
    span.style.width = "0";

    setTimeout(() => {
      span.style.opacity = "1";
      span.style.width = width;
    }, 100);
  };

  return (
    <CalculatorContainer>
      <div className="calculator__result">
        <div ref={expRef} className="calculator__result__exp"></div>
        <div className="calculator__result__exp"></div>
      </div>
      <CalculatorButtonsContainer ref={btnsRef}>
        {btns.map((item, index) => (
          <CalculatorButton key={index} onClick={() => btnClick(item)}>
            {item.display}
          </CalculatorButton>
        ))}
      </CalculatorButtonsContainer>
    </CalculatorContainer>
  );
};

export default Calculator;
