import styled from "styled-components";

export const DescriptionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.div`
  font-size: 1rem;
  text-align: left;
  line-height: 1.5;
  word-wrap: break-word;
  display: inline-block;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  max-width: 100%;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StyledPre = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  overflow-x: auto;
  border-radius: 4px;
`;
