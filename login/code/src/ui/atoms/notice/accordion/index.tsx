import { Disclosure, Transition } from "@headlessui/react";
import { UI_STRINGS } from "../../../../constants/strings";
import { NoticeAccordionType } from "../../../../types/component/noticeAccordion";
import { ReactIcon } from "../../../../types/icons";
import colours from "../../../../types/palette/colours";
import { classNames } from "../../../../utils/formatText";
import { Icon } from "../../icon";

const { Error, Success } = UI_STRINGS;

type Props = {
  children: JSX.Element;
  message: string;

  type?: NoticeAccordionType;
};

export const NoticeAccordion = (props: Props) => {
  const { children, message, type = NoticeAccordionType.ERROR } = props;

  const isErrorStyling = type === NoticeAccordionType.ERROR;

  const getChevron = (open: boolean) => (
    <Icon
      size={20}
      name={
        open
          ? ReactIcon.WARE_CHEVRON_UP_OUTLINE
          : ReactIcon.WARE_CHEVRON_DOWN_OUTLINE
      }
      colour={colours.grey_400}
    />
  );

  const body = (
    <Transition
      enter="transition duration-100 ease-out transform"
      enterFrom="opacity-0 translate-y-[-8px]"
      enterTo="opacity-100 translate-y-0"
      leave="transition duration-75 ease-out transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-[-8px]"
    >
      <Disclosure.Panel className="rounded-b-[8px] pb-[10px] pt-[30px] bg-white border-[0.5px] border-grey-250 w-full mt-[-20px] relative z-0">
        {children}
      </Disclosure.Panel>
    </Transition>
  );

  return (
    <div className="w-full rounded-[8px] py-[5px]">
      <Disclosure>
        {({ open }) => (
          <>
            <div
              className={classNames(
                "flex w-full justify-between items-center p-[12px] text-left text-wareDeepBlue focus:outline-none rounded-[8px] relative z-10",
                isErrorStyling ? "bg-red_100" : "bg-green_100"
              )}
            >
              <label
                className={classNames(
                  isErrorStyling ? "text-red_800" : "text-green_800",
                  "font-medium text-md leading-[20px] tracking-[0px] flex gap-[6px]"
                )}
              >
                <Icon
                  size={20}
                  name={
                    isErrorStyling ? ReactIcon.WARE_CHECK : ReactIcon.WARE_CROSS
                  }
                  colour={isErrorStyling ? colours.red_500 : colours.green_500}
                />
                {isErrorStyling ? Error : Success}
              </label>
              <label className="font-bold text-md leading-[20px] tracking-[0px] flex gap-[6px] text-grey_700">
                {message}
              </label>
              <div className="flex space-x-[8px]">
                <Disclosure.Button>
                  <div className="p-[4px]">{getChevron(open)}</div>
                </Disclosure.Button>
              </div>
            </div>
            {body}
          </>
        )}
      </Disclosure>
    </div>
  );
};
