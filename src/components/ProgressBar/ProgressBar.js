/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--border-radius": "4px",
    "--height": "8px",
    "--padding": "0",
  },
  medium: {
    "--border-radius": "4px",
    "--height": "12px",
    "--padding": "0",
  },
  large: {
    "--border-radius": "8px",
    "--height": "24px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Progress
      style={STYLES[size]}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <BarWrapper>
        <Bar value={value}>
          <VisuallyHidden>{value + "%"}</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Progress>
  );
};

const Progress = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  overflow: hidden;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value + "%"};
  height: 100%;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
