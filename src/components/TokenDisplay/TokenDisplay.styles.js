import styled from "styled-components";

export const TokenContainer = styled.div`
  padding: 0px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const MaskedCode = styled.span`
  font-weight: bold;
  font-family: monospace;
  background-color: #f0f0f0;
  padding: 2px 4px;
  border-radius: 4px;
`;
export const ContainerMC = styled.div`
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  margin: 20px auto;
  max-width: 300px;
  word-wrap: break-word;
`;

export const InlineParagraph = styled.p`
  margin: 5px 0;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const FormSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
