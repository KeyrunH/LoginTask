// https://www.abstractapi.com/guides/email-address-pattern-validation
export const RFC5322Regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const upperCaseRegex = "[A-Z]";
export const lowerCaseRegex = "[a-z]";
export const containsNumbersRegex = "[0-9]";
export const containsSpecialCharactersRegex =
  "[!@#$%£^&+=~*()_+\\[\\]{};':\"\\\\|,.<>/?-]+";

export const minPasswordLengthRegex = /^.{8,}$/;
