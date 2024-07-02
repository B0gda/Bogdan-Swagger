import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Divider = () => {
  return <DividerWrapper />;
};

export default Divider;
