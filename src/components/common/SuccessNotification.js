import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SuccessContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
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
  color: #155724;
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
  background-color: #155724;
  height: 5px;
  width: 100%;
  animation: ${shrinkAnimation} 5s linear forwards;
  transform-origin: right;
`;

const SuccessNotification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <SuccessContainer>
      <CloseButton onClick={onClose}>✕</CloseButton>
      <Header>
        <Message>{message}</Message>
      </Header>
      <ProgressBar />
    </SuccessContainer>
  );
};

export default SuccessNotification;
