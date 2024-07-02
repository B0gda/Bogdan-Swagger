import React, { useState, useEffect, useCallback } from "react";
import { getRoles, signUp } from "../../../api/mainServerAPI";
import {
  RolesContainer,
  RoleItem,
  RoleForm,
  RoleList,
  FormLabel,
  FormInput,
  ToggleButton,
  ToggleIcon,
  StyledRoleFormContainer,
  StyledFormSubmitButton,
  CloseButton,
  ErrorText,
} from "./Roles.styles";
import ErrorNotification from "../common/ErrorNotification";
import SuccessNotification from "../common/SuccessNotification";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "ss-sadriev-001@example.ru",
    role: "",
  });
  const [formErrors, setFormErrors] = useState({
    last_name: "",
    first_name: "",
    email: "",
    role: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const closeForm = useCallback(() => {
    setIsFormVisible(false);
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesData = await getRoles();
        setRoles(rolesData);
        if (!rolesData) {
          setError("Ошибка при загрузке ролей");
        } else {
          setError(null);
        }
      } catch (err) {
        setError("Ошибка при загрузке ролей");
      }
    };
    fetchRoles();
  }, []);

  const handleRoleClick = useCallback((role) => {
    setSelectedRole(role);
    setFormData({
      last_name: "",
      first_name: "",
      email: "ss-sadriev-001@example.ru",
      role: role,
    });
    setExpanded(false);
    setIsFormVisible(true);
  }, []);

  const handleInputChange = useCallback((field, value) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
    setFormErrors((prevState) => ({ ...prevState, [field]: "" }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { last_name, first_name, email } = formData;
      let errors = {};

      if (!selectedRole) {
        errors.role = "Выберите роль!";
      }

      if (last_name.length < 2 || !/^[A-Za-zА-Яа-яЁё]/.test(last_name)) {
        errors.last_name =
          "Фамилия должна содержать не менее 2 символов и начинаться с буквы.";
      }

      if (first_name.length < 2 || !/^[A-Za-zА-Яа-яЁё]/.test(first_name)) {
        errors.first_name =
          "Имя должно содержать не менее 2 символов и начинаться с буквы.";
      }

      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        errors.email = "Введите корректный адрес электронной почты.";
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      } else {
        setFormErrors({});
      }

      try {
        setSubmitting(true);

        const userData = {
          last_name,
          first_name,
          email,
          role: selectedRole,
        };

        const response = await signUp(userData);
        setSuccess("Регистрация прошла успешно: " + JSON.stringify(response));
        setError(null);
      } catch (error) {
        console.error("Ошибка при регистрации:", error);
        setError("Ошибка при регистрации: " + error.message);
      } finally {
        setSubmitting(false);
        setIsFormVisible(false);
      }
    },
    [formData, selectedRole]
  );

  const handleCloseError = useCallback(() => {
    setError(null);
  }, []);

  const handleCloseSuccess = useCallback(() => {
    setSuccess(null);
  }, []);

  return (
    <RolesContainer>
      <h2>Получение и установка роли (getRoles | signUp)</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <ToggleButton onClick={() => setExpanded(!expanded)}>
            <ToggleIcon expanded={expanded}>▼</ToggleIcon>
            Доступные роли
          </ToggleButton>
          {expanded && (
            <RoleList>
              {roles.map((role, index) => (
                <RoleItem key={index} onClick={() => handleRoleClick(role)}>
                  {role}
                </RoleItem>
              ))}
            </RoleList>
          )}
        </>
      )}

      {selectedRole && isFormVisible && (
        <StyledRoleFormContainer>
          <CloseButton onClick={closeForm}>✕</CloseButton>
          <RoleForm onSubmit={handleSubmit}>
            <FormLabel>
              Фамилия:
              <FormInput
                type="text"
                value={formData.last_name}
                onChange={(e) => handleInputChange("last_name", e.target.value)}
              />
              {formErrors.last_name && (
                <ErrorText>{formErrors.last_name}</ErrorText>
              )}
            </FormLabel>
            <FormLabel>
              Имя:
              <FormInput
                type="text"
                value={formData.first_name}
                onChange={(e) =>
                  handleInputChange("first_name", e.target.value)
                }
              />
              {formErrors.first_name && (
                <ErrorText>{formErrors.first_name}</ErrorText>
              )}
            </FormLabel>
            <FormLabel>
              Почта:
              <FormInput
                type="text"
                value={formData.email}
                onFocus={(e) =>
                  e.target.value === "ss-sadriev-001@example.ru" &&
                  setFormData({ ...formData, email: "" })
                }
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
            </FormLabel>
            <FormLabel>
              Роль:
              <FormInput type="text" value={selectedRole} readOnly />
            </FormLabel>
            <FormInput type="hidden" value={selectedRole} />

            <StyledFormSubmitButton
              type="submit"
              value="Установить"
              disabled={submitting}
            />
          </RoleForm>
        </StyledRoleFormContainer>
      )}
      {error && <ErrorNotification error={error} onClose={handleCloseError} />}
      {success && (
        <SuccessNotification message={success} onClose={handleCloseSuccess} />
      )}
    </RolesContainer>
  );
};

export default Roles;
