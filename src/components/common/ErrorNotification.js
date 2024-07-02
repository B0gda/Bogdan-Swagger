import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ErrorContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #721c24;
  font-size: 1.2em;
  cursor: pointer;
`;

const Message = styled.span`
  margin: 5px 0;
`;

const shrinkAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const ProgressBar = styled.div`
  background-color: #721c24;
  height: 5px;
  width: 100%;
  animation: ${shrinkAnimation} 5s linear forwards;
  transform-origin: right;
`;

const ErrorNotification = ({ error, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ErrorContainer>
      <CloseButton onClick={onClose}>✕</CloseButton>
      <Header>
        <Message>{error}</Message>
      </Header>
      <ProgressBar />
    </ErrorContainer>
  );
};

export default ErrorNotification;
