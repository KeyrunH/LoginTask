import { FieldErrors } from "react-hook-form";
import { ReactIcon } from "../../../types/icons";
import colours from "../../../types/palette/colours";
import { Icon } from "../icon";

type Props = {
  inputName: string;
  errors?: FieldErrors<any>;
  errorStyle?: string;
  customErrors?: {
    [inputName: string]: {
      message: string;
    };
  };
  knownAs?: string;
  isTouched?: boolean;
};

export const FormValidation = (props: Props) => {
  const {
    inputName,
    errors,
    errorStyle,
    customErrors,
    knownAs,
    isTouched = true,
  } = props;

  if (!isTouched) return null;

  if (
    !!errors?.[inputName]?.message ||
    !!customErrors?.[inputName]?.message ||
    (!!knownAs &&
      (!!errors?.[knownAs]?.message || !!customErrors?.[knownAs]?.message))
  ) {
    const messages = [
      customErrors?.[inputName]?.message,
      errors?.[inputName]?.message,
      customErrors?.[knownAs as string]?.message,
      errors?.[knownAs as string]?.message,
    ];

    return (
      <>
        {messages.reduce((acc, currentMessage) => {
          if (!!currentMessage)
            acc.push(
              <div
                key={`${currentMessage}`}
                className={
                  errorStyle ||
                  "flex flex-row justify-between items-center w-max gap-x-2"
                }
              >
                <div className="w-[20px]">
                  <Icon
                    name={ReactIcon.WARE_ERROR_OUTLINE}
                    colour={colours.red_500}
                    size={20}
                  />
                </div>
                <label className="font-medium text-md leading-[20px] tracking-[0px] text-red_800">
                  {`${currentMessage}`}
                </label>
              </div>
            );
          return acc;
        }, [] as JSX.Element[])}
      </>
    );
  }

  return null;
};
