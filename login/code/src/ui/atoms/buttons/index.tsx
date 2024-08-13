import { classNames } from "../../../utils/formatText";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  GHOST = "ghost",
  LINK = "link",
}

export enum ButtonSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
  EXTRA_SMALL = "extra-small",
  EXTRA_EXTRA_SMALL = "extra-extra-small",
}

type AriaAttributes = {
  role?: string;
  ariaLabel?: string;
};
export type LifeCycle = {
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  showAnswer?: boolean;
};

export type Props = {
  variant?: ButtonVariant;

  size?: ButtonSize;
  lifeCycle?: LifeCycle;
  onClick?: (e?: any) => void;
  hide?: boolean;
  htmlType?: "button" | "submit" | "reset" | undefined;
  ariaAttributes?: AriaAttributes | undefined;
  children?: JSX.Element;
};

export const Button = (props: Props) => {
  const {
    variant = ButtonVariant.PRIMARY,
    size,
    lifeCycle,
    onClick,
    htmlType,
    ariaAttributes,
    children = "Button",
  } = props;

  if (!!lifeCycle?.loading) {
    lifeCycle.disabled = lifeCycle.loading;
  }

  const border = () => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return "border-[0.5px] border-grey_250";
      case ButtonVariant.GHOST:
        return lifeCycle?.active ? "border-[0.5px] border-wareBlue" : "";
      default:
        return "";
    }
  };
  const borderRadius = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
      case ButtonVariant.SECONDARY:
      case ButtonVariant.DANGER:
      case ButtonVariant.GHOST:
        return "rounded-[8px]";
      default:
        return "";
    }
  };

  const background = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return classNames(
          // If active set to dark blue, the same as when hovered, otherwise standard
          lifeCycle?.active
            ? "bg-wareBlue_10"
            : "bg-wareBlue hover:bg-wareBlue_10",
          lifeCycle?.disabled ? "disabled:bg-grey_300" : ""
        );
      case ButtonVariant.DANGER:
        return classNames(
          // If active set to dark blue, the same as when hovered, otherwise standard
          lifeCycle?.active ? "bg-red_800" : "bg-red_500 hover:bg-red_800",
          lifeCycle?.disabled ? "disabled:bg-grey_300" : ""
        );
      case ButtonVariant.SECONDARY:
        return "bg-white";
      case ButtonVariant.GHOST:
        return classNames(
          "hover:bg-gray-200",
          lifeCycle?.active ? "bg-gray-100" : "",
          lifeCycle?.disabled ? "disabled:bg-white" : ""
        );
      default:
        return "";
    }
  };

  const padding = () => {
    // No padding for Link
    if (variant === ButtonVariant.LINK) {
      return "";
    }
    switch (size) {
      case ButtonSize.EXTRA_EXTRA_SMALL:
        return "p-[3px]";
      case ButtonSize.EXTRA_SMALL:
        return "p-[6px]";
      case ButtonSize.SMALL:
        return "p-[12px]";
      case ButtonSize.MEDIUM:
        return "py-[12px] px-[20px]";
      case ButtonSize.LARGE:
        return "py-[12px] px-[24px]";
      default:
        return "";
    }
  };

  const outline = () => {
    // Don't return an outline if disabled
    if (lifeCycle?.disabled) return "";
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return classNames(
          "hover:outline hover:outline-[3px] hover:outline-wareBlue_10/10",
          lifeCycle?.active
            ? "outline outline-[3px] outline-wareBlue_10/10"
            : ""
        );
      case ButtonVariant.DANGER:
        return classNames(
          "hover:outline hover:outline-[3px] hover:outline-red_800/10",
          lifeCycle?.active ? "outline outline-[3px] outline-red_800/10" : ""
        );
      case ButtonVariant.SECONDARY:
        return classNames(
          "hover:outline hover:outline-[3px] hover:outline-grey_150",
          lifeCycle?.active ? "outline outline-[3px] outline-grey_150" : ""
        );
      case ButtonVariant.GHOST:
        return lifeCycle?.active
          ? "outline outline-[3px] outline-wareBlue_10/10"
          : "";
      default:
        return "";
    }
  };

  const textColour = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
      case ButtonVariant.DANGER:
        return "text-white";
      case ButtonVariant.SECONDARY:
        if (lifeCycle?.disabled) return "text-grey_400";
        return "text-grey_700 hover:text-grey_800";
      case ButtonVariant.GHOST:
        if (lifeCycle?.disabled) return "text-grey_400";
        return "text-grey_800";
      case ButtonVariant.LINK:
        if (lifeCycle?.disabled) return "text-wareBlue";
        return "hover:text-wareBlue_10 text-wareBlue";
      default:
        return "";
    }
  };

  const textSize = () => {
    switch (size) {
      case ButtonSize.SMALL:
        return "text-sm";
      case ButtonSize.MEDIUM:
        return "text-md";
      case ButtonSize.LARGE:
        return "text-lg";
      default:
        return "";
    }
  };

  const fontWeight = () => {
    // potentially always medium
    return "font-medium";
  };

  const cursor = () => {
    if (lifeCycle?.disabled) {
      return "cursor-not-allowed";
    }
    return "cursor-pointer";
  };

  const getButtonIconGap = () => {
    switch (size) {
      case ButtonSize.SMALL:
        return "gap-1";
      case ButtonSize.MEDIUM:
        return "gap-1.5";
      case ButtonSize.LARGE:
        return "gap-2";
      default:
        return "";
    }
  };

  return (
    <button
      className={classNames(
        background(),
        cursor(),
        textColour(),
        textSize(),
        fontWeight(),
        padding(),
        outline(),
        border(),
        borderRadius()
      )}
      disabled={lifeCycle?.disabled}
      onClick={onClick}
      type={htmlType}
      aria-label={ariaAttributes?.ariaLabel}
      role={ariaAttributes?.role}
    >
      <span
        className={classNames(
          "flex flex-row items-center justify-center",
          getButtonIconGap()
        )}
      >
        {children}
      </span>
    </button>
  );
};
