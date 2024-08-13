import { useState } from "react";
import { ReactIcon } from "../../../types/icons";
import colours from "../../../types/palette/colours";
import { classNames } from "../../../utils/formatText";
import { Icon } from "../icon";

export enum NoticeStatus {
  ERROR = "error",
  INFO = "info",
}

type Props = {
  message: string;

  status?: NoticeStatus;
  hide?: boolean;
  iconName?: ReactIcon;
  callbackFn?: (open: boolean) => void;
};

export const Notice = (props: Props) => {
  const {
    message,
    status = NoticeStatus.ERROR,
    hide = false,
    iconName,
    callbackFn,
  } = props;

  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    callbackFn && callbackFn(false);
  };

  return !hide && open ? (
    <div
      className={classNames(
        status === NoticeStatus.ERROR ? "bg-red_100" : "bg-blue_100",
        "w-full py-[12px] px-[16px] rounded-[4px] flex justify-between"
      )}
    >
      <div className="flex space-x-1">
        <Icon
          name={iconName ?? ReactIcon.WARE_ERROR_OUTLINE}
          size={20}
          colour={
            status === NoticeStatus.ERROR ? colours.red_500 : colours.blue_500
          }
        />
        <p
          id="err-message"
          className={classNames(
            "font-medium text-md leading-[20px] tracking-[0px]",
            status === NoticeStatus.ERROR ? "text-red_800" : "text-blue_800"
          )}
        >
          {message}
        </p>
      </div>

      <button onClick={handleClose}>
        <Icon
          name={ReactIcon.WARE_CROSS_OUTLINE}
          size={16}
          colour={colours.grey_400}
        />
      </button>
    </div>
  ) : null;
};
