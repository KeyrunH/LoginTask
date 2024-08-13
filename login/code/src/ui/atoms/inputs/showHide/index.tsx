import { ReactIcon } from "../../../../types/icons";
import colours from "../../../../types/palette/colours";
import { Icon } from "../../icon";

export type Props = {
  handlePress: () => void;
  isHidden: boolean;
  isPassword: boolean;
  disabled?: boolean;
};

export const ShowHide = (props: Props) => {
  const { disabled = false, handlePress, isHidden, isPassword } = props;

  if (!isPassword) {
    return null;
  }

  return (
    <button
      className="ml-[-35px] mr-3 flex items-center justify-center"
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        handlePress();
      }}
      tabIndex={-1}
    >
      <Icon
        name={
          isHidden
            ? ReactIcon.WARE_EYE_CLOSED_OUTLINE
            : ReactIcon.WARE_EYE_OPEN_OUTLINE
        }
        colour={colours.grey_400}
        size={20}
      />
    </button>
  );
};
