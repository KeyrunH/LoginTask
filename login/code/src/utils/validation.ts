import {
  containsNumbersRegex,
  containsSpecialCharactersRegex,
  lowerCaseRegex,
  minPasswordLengthRegex,
  RFC5322Regex,
  upperCaseRegex,
} from "../constants/validation";

export const validateEmail = (email: string) =>
  new RegExp(RFC5322Regex).test(email);

export const validatePassword = (
  password: string
): [
  boolean,
  {
    hasUppercase: any;
    hasLowercase: any;
    hasNumber: any;
    hasSpecialCharacter: any;
    hasMinimumLength: any;
  },
] => {
  const hasUppercase = new RegExp(upperCaseRegex).test(password);
  const hasLowercase = new RegExp(lowerCaseRegex).test(password);
  const hasNumber = new RegExp(containsNumbersRegex).test(password);
  const hasSpecialCharacter = new RegExp(containsSpecialCharactersRegex).test(
    password
  );
  const hasMinimumLength = new RegExp(minPasswordLengthRegex).test(password);
  return [
    hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter &&
      hasMinimumLength,
    {
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialCharacter,
      hasMinimumLength,
    },
  ];
};
