import { useEffect, useRef, useState } from "react";
import { Control, RefCallBack } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { WARN_STRINGS } from "../../../constants/strings/warn";
import { LifeCycle } from "../../../types/component";
import { inputInfo } from "../../../types/component/input";
import { RequiredCharCount, TextInputType } from "../../../types/content/form";
import { ReactIcon } from "../../../types/icons";
import colours from "../../../types/palette/colours";
import { classNames } from "../../../utils/formatText";
import { Icon } from "../icon";
import { ShowHide } from "./showHide";

const { CallbackMustBePassed } = WARN_STRINGS.component.TextInput;
const DEFAULT_NUMBER_OF_LINES = 4;

export type InputProps = {
  inputInfo: inputInfo;
  type: TextInputType;
  isValid?: boolean;
  text?: string;
  onChange?: {
    handleOnTextEvent?: (
      e?: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    onBlur?: (
      e?: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    onClick?: (e?: any) => void;
  };
  lifeCycle?: LifeCycle;
  placeholder?: string;
  reference?: {
    obj?: React.LegacyRef<any>; // cannot specify as we need to satisfy any HTML input type
    callback?: RefCallBack;
  };
  readOnly?: boolean;
  control?: Control<any>;
};

export type WrapperProps = InputProps & {
  autoComplete?: boolean;
  codeValues?: string[];
  inLineLabel?: boolean;
  label?: string;
  regex?: RegExp;
  required?: boolean | RequiredCharCount;
  validation?: {
    isValid?: boolean;
    text?: string;
  };
};

export const Input = (props: WrapperProps) => {
  const {
    autoComplete = true,
    codeValues,
    inLineLabel = false,
    inputInfo,
    label,
    lifeCycle = {},
    onChange = {},
    placeholder,
    readOnly = false,
    reference,
    required,
    text,
    type,
    validation = {},
    control,
  } = props;

  const { text: validationText, isValid = true } = validation;
  const { disabled = false, showAnswer = false } = lifeCycle;
  const { handleOnTextEvent, onBlur, onClick } = onChange;
  const {
    name,
    numberOfLines,
    showPasswordByDefault = false,
    passShowHideIcon = type === TextInputType.PASSWORD,
    tabIndex,
    min,
    max,
  } = inputInfo;
  const { obj, callback } = reference ?? {};

  useEffect(() => {
    if (!handleOnTextEvent && !onClick) {
      console.warn(CallbackMustBePassed);
    }
  }, [handleOnTextEvent, onClick]);

  const inputDivRef = useRef<HTMLDivElement>(null);

  // Remove all children components, that caught when resizing after initialising, when disposing the main component
  // This avoids ResizeObserver errors introduced by third-party extensions.
  useEffect(() => {
    let resizeObserverEntries: ResizeObserverEntry[] = [];

    const observer = new ResizeObserver((entries) => {
      resizeObserverEntries = entries;
    });

    if (inputDivRef.current) observer.observe(inputDivRef.current);

    return () => {
      resizeObserverEntries.forEach((entry) => entry.target.remove());
      observer.disconnect();
    };
  }, []);

  const [isHidden, setIsHidden] = useState(showPasswordByDefault);
  const handlePress = () => setIsHidden((prevState) => !prevState);
  const [inputFocusedIndex, setInputFocusedIndex] = useState<number>(-1); // -1 indicates no input is focused
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));

  const handleFocus = (index: number) => {
    setInputFocusedIndex(index);
  };

  const handleBlur = () => {
    setInputFocusedIndex(-1);
  };

  const handleFocusInput = (
    currentIndex: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Backspace" ||
      (event.key === "Delete" && currentIndex > 0)
    ) {
      // Needs to be async to prevent the input from being focused before the value is deleted
      requestAnimationFrame(() => {
        if (currentIndex > 0) {
          inputRefs.current[currentIndex - 1]?.focus();
          const prevInput = inputRefs.current[currentIndex - 1];
          if (prevInput) {
            prevInput.setSelectionRange(0, prevInput.value.length);
          }
        }
      });
    } else if (
      event.key === "Tab" ||
      (currentIndex < 6 && /^[0-9]$/.test(event.key))
    ) {
      // Allow for tabbing forward and backward without altering or forcing auto tabbing
      if (event.key !== "Tab") {
        // Needs to be async to prevent the input from being focused before the value is added
        requestAnimationFrame(() => {
          inputRefs.current[currentIndex + 1]?.focus();
          const nextInput = inputRefs.current[currentIndex + 1];
          if (nextInput) {
            nextInput.setSelectionRange(0, nextInput.value.length);
          }
        });
      }
    } else {
      // Prevent non-numeric input
      event.preventDefault();
    }
  };

  const handleSelectText = (index: number) => {
    const input = inputRefs.current[index];
    if (input) {
      input.select();
    }
  };

  const isPassword = type === TextInputType.PASSWORD;
  const passwordIsShowing = isPassword && isHidden;

  const getInput = () => {
    switch (type) {
      case TextInputType.TEXTAREA:
        return (
          <textarea
            className={classNames(
              isValid
                ? "border-grey_50 focus:border-wareBlue focus:ring-wareBlue"
                : "border-red_500 focus:border-red_500 focus:ring-red_500/20",
              disabled || readOnly ? "cursor-not-allowed" : "",
              "resize-none w-full rounded-lg p-3 focus:ring-2 focus:ring-opacity-10 placeholder:font-normal text-md font-medium bg-grey_50"
            )}
            disabled={showAnswer || disabled || readOnly}
            name={name}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            onChange={handleOnTextEvent}
            placeholder={placeholder}
            rows={numberOfLines || DEFAULT_NUMBER_OF_LINES}
            value={text}
            onBlur={onBlur}
            ref={callback ?? obj}
            tabIndex={tabIndex}
            readOnly={readOnly}
          />
        );
      case TextInputType.PHONE:
        return (
          <div
            ref={inputDivRef}
            className={classNames(
              inLineLabel
                ? "flex-auto flex relative items-center max-w-full"
                : ""
            )}
          >
            <PhoneInputWithCountry
              name={name}
              control={control}
              rules={{ required: required, validate: name }}
              country="GB"
              initialValueFormat="national"
              displayInitialValueAsLocalNumber={true}
              defaultCountry="GB"
              limitMaxLength
              defaultValue={text}
              value={text}
              disabled={showAnswer || disabled || readOnly}
              onChange={handleOnTextEvent}
              placeholder={placeholder}
              readOnly={readOnly}
              className="w-full flex m-0 h-[44px]"
              autoComplete="off"
            />
          </div>
        );
      case TextInputType.CODE:
        return (
          <div className="flex justify-between space-x-2">
            {[...Array(6)].map((_, index) => (
              <div className="relative" key={`${name}-${index}`}>
                <div
                  className={
                    index === inputFocusedIndex
                      ? "border-b-[1px] border-wareBlue absolute bottom-2 left-4 right-4"
                      : ""
                  }
                  key={index}
                />
                <input
                  key={`${name}-${index}`}
                  className="resize-none w-full rounded-lg bg-grey_50 focus:bg-wareBlue hover:bg-grey_100 p-3 focus:text-wareBlue placeholder:text-grey_500 focus:bg-opacity-10 text-center focus:bg-no-repeat border-grey_50 focus:bg-right-center focus:outline-none text-grey_900 placeholder:font-normal text-sm font-medium"
                  disabled={disabled || readOnly}
                  name={`${name}-${index}`}
                  onChange={(event) => {
                    handleOnTextEvent?.(event);
                  }}
                  onKeyDown={(event) => {
                    handleFocusInput(index, event);
                  }}
                  type="text" // We require text to use things such as setSelectionRange
                  value={codeValues ? codeValues[index] : text}
                  onBlur={handleBlur}
                  ref={(ref) => {
                    inputRefs.current[index] = ref;
                  }}
                  maxLength={1}
                  onFocus={() => handleFocus(index)}
                  onClick={() => handleSelectText(index)}
                  readOnly={readOnly}
                  onPaste={(event) => event.preventDefault()}
                />
              </div>
            ))}
          </div>
        );
      case TextInputType.NUMBER:
        return (
          <div
            ref={inputDivRef}
            className={classNames(
              inLineLabel ? "flex-auto" : "justify-between",
              "flex relative items-center"
            )}
          >
            <input
              className={classNames(
                isValid
                  ? "border-grey_50 focus:border-wareBlue focus:ring-wareBlue"
                  : "border-red_500 focus:border-red_500 focus:ring-red_500/20",
                disabled || readOnly ? "cursor-not-allowed" : "cursor-pointer",
                "resize-none bg-grey_50 w-full rounded-lg px-3 py-[11px] focus:ring-2 focus:ring-opacity-10 font-medium placeholder:font-normal text-md"
              )}
              disabled={showAnswer || disabled || readOnly}
              name={name}
              onChange={handleOnTextEvent}
              placeholder={placeholder}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
              type={type}
              value={text}
              ref={callback ?? obj}
              onClick={onClick}
              tabIndex={tabIndex}
              readOnly={readOnly}
              min={min !== undefined ? min : undefined}
              max={max !== undefined ? max : undefined}
            />

            {passShowHideIcon ? (
              <ShowHide
                isPassword={isPassword}
                isHidden={isHidden}
                handlePress={handlePress}
                disabled={disabled}
              />
            ) : null}
          </div>
        );
      default:
        return (
          <div
            ref={inputDivRef}
            className={classNames(
              inLineLabel ? "flex-auto" : "justify-between",
              "flex relative items-center"
            )}
          >
            <input
              className={classNames(
                isValid
                  ? "border-grey_50 focus:border-wareBlue focus:ring-wareBlue"
                  : "border-red_500 focus:border-red_500 focus:ring-red_500/20",
                disabled || readOnly ? "cursor-not-allowed" : "cursor-pointer",
                "resize-none bg-grey_50 w-full rounded-lg px-3 py-[11px] focus:ring-2 focus:ring-opacity-10 font-medium placeholder:font-normal text-md"
              )}
              disabled={showAnswer || disabled || readOnly}
              name={name}
              onChange={handleOnTextEvent}
              placeholder={placeholder}
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
              type={passwordIsShowing ? TextInputType.TEXT : type}
              value={text}
              ref={callback ?? obj}
              onBlur={onBlur}
              onClick={onClick}
              tabIndex={tabIndex}
              readOnly={readOnly}
              autoComplete={
                autoComplete
                  ? "on"
                  : TextInputType.PASSWORD
                    ? "new-password"
                    : "off"
              }
            />

            {type === TextInputType.DATE ? (
              <div className="absolute right-3 pointer-events-none">
                <Icon
                  name={ReactIcon.WARE_CALENDAR_EMPTY_OUTLINE}
                  colour={colours.grey_300}
                  size={16}
                />
              </div>
            ) : null}

            {passShowHideIcon ? (
              <ShowHide
                isPassword={isPassword}
                isHidden={isHidden}
                handlePress={handlePress}
                disabled={disabled}
              />
            ) : null}
          </div>
        );
    }
  };

  return (
    <div
      className={classNames(
        "flex items-left",
        inLineLabel ? "flex items-center gap-6" : "flex flex-col items-left"
      )}
    >
      {label && (
        <label
          className={classNames(
            inLineLabel
              ? "text-grey_500 min-w-[168px] w-[168px]"
              : "text-grey_700 mb-2",
            "text-md leading-[20px] tracking-[0px] font-medium"
          )}
        >
          <>
            {label}
          </>
        </label>
      )}

      {getInput()}

      {!isValid && (
        <div className="flex items-center mt-[8px]">
          <Icon
            name={ReactIcon.WARE_ERROR}
            size={14}
            colour={colours.error_500}
          />

          <p className="font-medium text-sm leading-[16px] tracking-[0px] text-error_500 ml-[8px]">
            {validationText}
          </p>
        </div>
      )}
    </div>
  );
};
