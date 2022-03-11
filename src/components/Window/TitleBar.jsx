import React from "react";
import styled from "styled-components";
import crossIcon from "../../assets/icons/titlebar/crossIcon.svg";
import minusIcon from "../../assets/icons/titlebar/minusIcon.svg";
import expandIcon from "../../assets/icons/titlebar/expandIcon.svg";

const TitleButton = styled.button`
  border: none;
  background: transparent;
  margin: 3px;
  margin-left: 6px;
`;

const TitleBar = (props) => {
  const TitleBarContainer = styled.div`
    width: 100%;
    height: 20px;
    background: gray;
    border-radius: 10px 10px 0px 0px;
  `;

  return (
    <TitleBarContainer>
      <TitleButton>
        <img src={crossIcon} alt="" width={10} />
      </TitleButton>
      <TitleButton>
        <img src={minusIcon} alt="" width={10} />
      </TitleButton>
      <TitleButton>
        <img src={expandIcon} alt="" width={10} />
      </TitleButton>
    </TitleBarContainer>
  );
};

export default TitleBar;
