import { useEffect, useState } from "react";
import { ReactIcon } from "../../../../types/icons";
import colours from "../../../../types/palette/colours";
import { classNames } from "../../../../utils/formatText";
import { LifeCycle } from "../../buttons";
import { Icon } from "../../icon";

export type Props = {
  checked: boolean;
  id: string;
  onChangeHandler: (value: string, isChecked: boolean) => void;
  value: string | number;

  styleOutlined?: boolean;
  label?: string;
  indeterminate?: boolean;
  lifeCycle?: Omit<LifeCycle, "showAnswer"> & {
    showAnswer?: { value: string | number; checked: boolean };
  };
};

export const Checkbox = (props: Props) => {
  const {
    checked: initialChecked,
    indeterminate,
    id,
    lifeCycle = {},
    label,
    onChangeHandler,
    styleOutlined = false,
    value,
  } = props;

  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    setChecked(initialChecked || false);
  }, [initialChecked]);

  const { disabled = false, loading = false, showAnswer } = lifeCycle;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChangeHandler(e.target.value, e.target.checked);
  };

  const handleOnOutlinedChange = () =>
    onChangeHandler(`${!!showAnswer ? showAnswer.value : value}`, !checked);

  const getCheckbox = () => {
    const useCheckedStyling = !!checked || !!indeterminate;

    return (
      <>
        <span className="absolute ml-[7px] pointer-events-none">
          <Icon
            name={
              checked
                ? ReactIcon.WARE_CHECKBOX_TICK
                : ReactIcon.WARE_CHECKBOX_INDETERMINATE
            }
            colour={colours.white}
            size={10}
            hide={!indeterminate}
          />
        </span>

        <div className="p-1">
          <input
            type="checkbox"
            id={id}
            checked={!!showAnswer ? showAnswer.checked : checked}
            onChange={styleOutlined ? undefined : handleOnChange}
            value={!!showAnswer ? showAnswer.value : value}
            className={classNames(
              "w-[16px] h-[16px] rounded appearance-none border grid place-content-center cursor-pointer",
              useCheckedStyling
                ? "bg-wareBlue border-wareBlue"
                : "bg-white border-grey_100",
              disabled
                ? "disabled:grey_200 disabled:bg-grey_200 disabled:hover:grey_200 disabled:hover:bg-grey_200 disabled:hover:cursor-not-allowed disabled:border-grey_250 disabled:border-1 disabled:hover:border-1"
                : "hover:border-[2px] hover:border-grey_200"
            )}
            disabled={!!showAnswer || disabled}
          />
        </div>

        {!!label?.length && (
          <label
            htmlFor={id}
            className={classNames(
              "font-medium text-md leading-[20px] text-grey_900 tracking-[0px] flex flex-1 ml-2",
              disabled ? "pointer-events-none" : ""
            )}
          >
            {label}
          </label>
        )}
      </>
    );
  };


  if (styleOutlined) {
    const useCheckedStyling = !!showAnswer ? showAnswer.checked : checked;

    return (
      <button
        className={classNames(
          "flex m-0 items-center w-max bg-white h-[44px] p-[16px] pr-[12px] border-[0.5px] rounded-[8px]",
          useCheckedStyling ? "border-wareBlue_10" : "border-grey_200"
        )}
        key={!!showAnswer ? showAnswer.value : value}
        onClick={handleOnOutlinedChange}
      >
        {getCheckbox()}
      </button>
    );
  }

  return (
    <div
      className="flex m-0 items-center min-w-[80px]"
    >
      {getCheckbox()}
    </div>
  );
};
