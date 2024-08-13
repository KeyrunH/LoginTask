import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import WareLogo from "../../assets/images/ware-black.svg";
import { UI_STRINGS } from "../../constants/strings";
import { useAuthenticateCredentials } from "../../hooks/api";
import { LoginResponse } from "../../types/api";
import { TextInputType } from "../../types/content/form";
import { validateEmail, validatePassword } from "../../utils/validation";
import { Button, ButtonSize, ButtonVariant } from "../atoms/buttons";
import { Checkbox } from "../atoms/checkbox/checkbox";
import { FormValidation } from "../atoms/formValidation";
import { Input } from "../atoms/inputs";
import { Notice } from "../atoms/notice";

const {
  Login: LoginString,
  Ware,
  Email,
  ForgotPassword,
  YourEmailAddress,
  Password,
  EnterYourPassword,
  RememberMe,
  EmailIsRequired,
  InvalidEmail,
  PasswordIsRequired,
} = UI_STRINGS;

export const Login = () => {

  const [checked, setChecked] = useState({ value: false });
  const [noticeMessage, setNoticeMessage] = useState("");
  const [shownTwoFactorAuth, setShownTwoFactorAuth] = useState(false);
  const [requiresTwoFactorAuth, setRequiresTwoFactorAuth] = useState(false);

  const defaultValues: any = {
    [FormKey.Email]: "",
    [FormKey.Password]: "",
  };

  const {
    formState: { errors, isValid },
    handleSubmit,
    trigger,
    getValues,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const watchEmail = watch(FormKey.Email);
  const watchPassword = watch(FormKey.Password);

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const errorFn = (error?: Error | string) => {
    setNoticeMessage(`${error}`);
    setShownTwoFactorAuth(false);
    setDisableSubmitButton(false);
  };
  const successFn = () => {
    setNoticeMessage("");
    setShownTwoFactorAuth(false);
    setDisableSubmitButton(false);
    setIsSuccess(true);
  };

  const [login, isAuthenticating] = useAuthenticateCredentials(
    {
      email: getValues(FormKey.Email),
      password: getValues(FormKey.Password),
      rememberUser: checked["value"],
    },
    {
      errorFn,
      successFn,
    }
  );

  const onSubmit: SubmitHandler<LoginSchema> = () => {
    setDisableSubmitButton(true);
    login();
  };

  const onCheckboxChange = (value: string | number, checked: boolean) => {
    setChecked((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  };

  // Validation for login without 2fa
  const disableLogin =
    !isValid ||
    isAuthenticating ||
    (requiresTwoFactorAuth && !shownTwoFactorAuth);

  // Validation for login with 2fa
  const disableVerify =
    isAuthenticating ||
    !getValues(FormKey.Email).length ||
    !getValues(FormKey.Password).length;

  const handleOnTextEvent = (
    e?: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {

  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (
          (!disableLogin && !requiresTwoFactorAuth) ||
          (!disableVerify && requiresTwoFactorAuth)
        ) {
          if (
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement
          ) {
            e.preventDefault();
            onSubmit(getValues());
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [disableLogin, disableVerify, requiresTwoFactorAuth]);

  const handleOnResetLinkPress = () => {
    console.log('Navigate to forgotten password page');
  };
  const passwordInput = (
    <div className="flex-col items-left">
      <div className="flex justify-between mb-2">
        <label className="text-md leading-[20px] tracking-[0px] text-grey_700 font-medium">
          {Password}
        </label>
        <button
          className="text-sm font-medium text-wareBlue text-right"
          onClick={handleOnResetLinkPress}
          tabIndex={-1}
          type="button"
        >
          {`${ForgotPassword}?`}
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <Input
          inputInfo={{ name: FormKey.Password, tabIndex: 2 }}
          type={TextInputType.PASSWORD}
          text={watchPassword}
          onChange={{
            handleOnTextEvent: (e) => {
              setValue(FormKey.Password, e?.target.value ?? "");
              trigger(FormKey.Password);
            },
          }}
          placeholder={EnterYourPassword}
          autoComplete={true}
        />
        <FormValidation inputName={FormKey.Password} errors={errors} />
      </div>
    </div>
  );

  return  isSuccess ? (
    <p id="success-id">Woohoo I'm logged in!</p>
  ) : (
      <div className="flex flex-1 flex-row bg-grey_50 h-screen">
        <div className="flex flex-1 flex-col h-full justify-center items-center">
          <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-[0_4px_12px_-4px_#12112914] flex flex-col w-[440px] rounded-[8px] border-[0.5px] border-grey_200 bg-white"
          >
            <div className="py-[28px] px-[12px] border-b-[0.5px] border-grey_200">
              <img
                  src={WareLogo}
                  alt={Ware}
                  className="max-w-[120px] w-full h-[28.23px] mx-auto"
              />
            </div>
            <div className="flex flex-col px-3 py-7 gap-7 border-b-[0.5px] border-grey_200">
              <h2 className="text-wareDeepBlue">{LoginString}</h2>
              <div className="flex flex-col gap-1">
                <Input
                    inputInfo={{ name: FormKey.Email, tabIndex: 1 }}
                    type={TextInputType.TEXT}
                    text={watchEmail}
                    onChange={{
                      handleOnTextEvent: (e) => {
                        setValue(FormKey.Email, e?.target.value ?? "");
                        trigger(FormKey.Email);
                      },
                    }}
                    label={Email}
                    placeholder={YourEmailAddress}
                />
                <FormValidation inputName={FormKey.Email} errors={errors} />
              </div>

              <div>
                {passwordInput}
                <div className="mt-4 font-medium">
                  <Checkbox
                      id="1"
                      label={RememberMe}
                      value="value"
                      checked={checked["value"]}
                      onChangeHandler={onCheckboxChange}
                  />
                </div>
                {!!noticeMessage?.length && (
                    <div className="mt-5">
                      <Notice
                          message={`${noticeMessage}`}
                          callbackFn={() => setNoticeMessage("")}
                      />
                    </div>
                )}
              </div>
            </div>
            <div className="p-3 gap-[10px] flex flex-col border-b-[0.5px] border-grey_200">
              <Button
                  lifeCycle={{
                    disabled: disableLogin || disableSubmitButton,
                  }}
                  size={ButtonSize.MEDIUM}
                  variant={ButtonVariant.PRIMARY}
              >
                <>{LoginString}</>
              </Button>
            </div>
          </form>
        </div>
      </div>
  );
};

enum FormKey {
  Email = "Email",
  Password = "Password",
}

type LoginSchema = {
  [FormKey.Email]: string;
  [FormKey.Password]: string;
};

const schema = yup.object<LoginSchema>({
  [FormKey.Email]: yup
    .string()
    .required(EmailIsRequired)
    .test(FormKey.Email, InvalidEmail, validateEmail),
  [FormKey.Password]: yup
    .string()
    .required(PasswordIsRequired)
    .test(FormKey.Password, "", (value) => validatePassword(value)[0]),
});
