import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectEl value={value} onChange={onChange}>
        {children}
      </SelectEl>
      <StyledIcon id="chevron-down" />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectEl = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  pointer-events: none;

  /* Centering trick without flexbox */
  top: 0;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
`;

export default Select;
