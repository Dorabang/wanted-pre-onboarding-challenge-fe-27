export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // @와 . 포함 여부 검사
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  return password.length >= 8;
};

export const authValidateCheck = (email: string, password: string) => {
  if (validateEmail(email) && validatePassword(password)) {
    return true;
  }
  return false;
};
