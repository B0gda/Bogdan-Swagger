import axios from "axios";

export const getRoles = async () => {
  try {
    const response = await axios.get("/api/get-roles");
    return response.data.roles;
  } catch (error) {
    console.error("Ошибка при получении направлений:", error);
    return [];
  }
};

export const signUp = async (userData) => {
  try {
    const response = await axios.post("/api/sign-up", userData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
  }
};

export const getCode = async (email) => {
  try {
    const response = await axios.get("/api/get-code", {
      params: { email },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении кода:", error);
  }
};

export const setStatus = async (token, status) => {
  try {
    const response = await axios.post("/api/set-status", {
      token,
      status,
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при установке статуса:", error);
  }
};

const base64Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export const encodeBase64 = (email, code) => {
  const str = `${email}:${code}`;
  let binaryStr = "";
  for (let i = 0; i < str.length; i++) {
    let elem = str.charCodeAt(i).toString(2);
    while (elem.length < 8) {
      elem = "0" + elem;
    }
    binaryStr += elem;
  }
  let resStr = "";
  for (let i = 0; i < binaryStr.length; i += 6) {
    let elemSegment = binaryStr.substring(i, i + 6);
    while (elemSegment.length < 6) {
      elemSegment += "0";
    }
    const index = parseInt(elemSegment, 2);
    resStr += base64Chars[index];
  }
  while (resStr.length % 4 !== 0) {
    resStr += "=";
  }
  return resStr;
};
