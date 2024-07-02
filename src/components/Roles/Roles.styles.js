import styled from "styled-components";

export const RolesContainer = styled.div`
  padding: 0px;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const RoleItem = styled.li`
  list-style-type: none;
  padding: 5px 0;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RoleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RoleList = styled.ul`
  list-style-type: none;
  display: inline-block;
  padding: 10px;
  padding-left: 20px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const FormSubmitButton = styled.input`
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

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ToggleIcon = styled.span`
  margin-right: 8px;
  transform: ${(props) => (props.expanded ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9em;
  margin: 0;
`;

export const StyledRoleFormContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: left;
  width: 70%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

export const StyledFormSubmitButton = styled(FormSubmitButton)`
  padding: 10px 20px;
  background: linear-gradient(to right, #007bff, #0056b3);
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 1.2rem;
`;
