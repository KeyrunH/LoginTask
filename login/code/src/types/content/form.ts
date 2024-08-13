export enum TextInputType {
  PASSWORD = "password",
  PHONE = "tel",
  TEXT = "text",
  TIME = "time",
  DATE = "date",
  NUMBER = "number",
  EMAIL = "email",
  TEXTAREA = "textarea",
  CODE = "code",
}

export type RequiredCharCount = {
  minChars?: number;
  maxChars?: number;
};

export type TextInput = {
  [inputName: string]: string;
};
