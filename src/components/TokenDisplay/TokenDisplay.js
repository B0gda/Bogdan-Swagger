import React, { useState, useCallback } from "react";
import { getCode, setStatus, encodeBase64 } from "../../../api/mainServerAPI";
import {
  TokenContainer,
  MaskedCode,
  FormInput,
  FormSubmitButton,
  FormRow,
  ContainerMC,
  InlineParagraph,
} from "./TokenDisplay.styles";
import ErrorNotification from "../common/ErrorNotification";
import SuccessNotification from "../common/SuccessNotification";

const TokenDisplay = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codebase64, setCodeBase64] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetCode = useCallback(async () => {
    setIsLoading(true);
    setSuccess(false);

    try {
      const codeData = await getCode(email);
      if (!codeData) {
        setError("Указанный адрес почты не зарегистрирован в системе");
        throw new Error("Code is undefined");
      }
      setCode(codeData);

      const encodedToken = encodeBase64(`${email}:${codeData}`);
      setCodeBase64(encodedToken);

      await setStatus(encodedToken, "active");

      setSuccess(true);
    } catch (err) {
      setError("Ошибка при получении кода или установке статуса");
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  const handleCloseError = useCallback(() => {
    setError(null);
  }, []);

  const handleCloseSuccess = useCallback(() => {
    setSuccess(false);
  }, []);

  const maskToken = useCallback(
    (token) => token.replace(/.(?=.{4})/g, "*"),
    []
  );

  return (
    <TokenContainer>
      <h2>
        Получение кода и установка статуса (getCode | encodeBase64 | setStatus)
      </h2>
      <FormRow>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
        />
        <FormSubmitButton onClick={handleGetCode} disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Получить код"}
        </FormSubmitButton>
      </FormRow>
      {success && (
        <ContainerMC>
          <InlineParagraph>
            Код: <MaskedCode>{maskToken(code)}</MaskedCode>
          </InlineParagraph>
          <InlineParagraph>
            Токен: <MaskedCode>{maskToken(codebase64)}</MaskedCode>
          </InlineParagraph>
        </ContainerMC>
      )}
      {error && <ErrorNotification error={error} onClose={handleCloseError} />}
      {success && (
        <SuccessNotification
          message="Статус установлен успешно!"
          onClose={handleCloseSuccess}
        />
      )}
    </TokenContainer>
  );
};

export default TokenDisplay;
