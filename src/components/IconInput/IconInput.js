import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const STYLES = {
    small: {
      "--font-size": "14px",
      "--icon-size": "16px",
      "--padding-left": "22px",
    },
    large: {
      "--font-size": "18px",
      "--icon-size": "24px",
      "--padding-left": "32px",
    },
  };
  return (
    <Wrapper style={STYLES[size]}>
      <StyledIcon for="search-box">
        <Icon id={icon} size={STYLES[size]["--icon-size"]} />
      </StyledIcon>
      <StyledInput id="search-box" placeholder={placeholder} width={width} />
    </Wrapper>
  );
};

const StyledInput = styled.input`
  appearance: none;
  border: none;
  padding-left: var(--padding-left);
  outline: none;
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const StyledIcon = styled.label`
  position: absolute;
  top: 0;
  margin: auto;
  width: var(--icon-size);
  height: var(--icon-size);
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 2px;
  border-bottom: 1px solid ${COLORS.black};
  width: max-content;
}
`;

export default IconInput;
