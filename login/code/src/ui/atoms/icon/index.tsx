import { useEffect, useState } from "react";
import { ReactIcon } from "../../../types/icons";
import colours from "../../../types/palette/colours";

export type Props = {
  colour?: string;
  hide?: boolean;
  hoverColour?: string;
  loading?: boolean;
  name?: ReactIcon;
  parentIsHovered?: boolean;
  size?: number;
  strokeWidth?: string;
};

export const Icon = (props: Props) => {
  const {
    hide = false,
    loading = false,
    name,
    colour = name === ReactIcon.WARE_LOGO ? colours.wareBlue : colours.grey_300,
    hoverColour = colour,
    parentIsHovered = undefined,
    size = 20,
    strokeWidth,
  } = props;

  const [isHover, setIsHover] = useState(parentIsHovered ?? false);

  useEffect(() => {
    setIsHover(parentIsHovered ?? false);
  }, [parentIsHovered]);

  const determinedIconColour = isHover ? hoverColour : colour;

  const onMouseEnter =
    parentIsHovered === undefined ? () => setIsHover(true) : undefined;
  const onMouseLeave =
    parentIsHovered === undefined ? () => setIsHover(false) : undefined;

  const getIcon = () => {
    switch (name) {
      case ReactIcon.WARE_CHECKBOX_TICK:
        return (
          <svg
            width={size}
            height={size}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6666 5.41666L7.49998 14.5833L3.33331 10.4167"
              stroke={determinedIconColour}
              strokeWidth={strokeWidth ?? "1.5"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case ReactIcon.WARE_CHECKBOX_INDETERMINATE:
        return (
          <svg
            width={size}
            height={size}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.25L4.5 8.75L2 6.25"
              stroke={determinedIconColour}
              strokeWidth={strokeWidth ?? "1.25"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case ReactIcon.WARE_EYE_OPEN_OUTLINE:
        return (
            <svg
                width={size}
                height={size}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M9.41465 6.5865C10.1953 7.36717 10.1953 8.6345 9.41465 9.4165C8.63398 10.1972 7.36665 10.1972 6.58465 9.4165C5.80398 8.63583 5.80398 7.3685 6.58465 6.5865C7.36665 5.8045 8.63331 5.8045 9.41465 6.5865"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.25"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.00012 8.00016C2.00012 7.56083 2.10146 7.12616 2.29746 6.7255V6.7255C3.30746 4.66083 5.53946 3.3335 8.00012 3.3335C10.4608 3.3335 12.6928 4.66083 13.7028 6.7255V6.7255C13.8988 7.12616 14.0001 7.56083 14.0001 8.00016C14.0001 8.4395 13.8988 8.87416 13.7028 9.27483V9.27483C12.6928 11.3395 10.4608 12.6668 8.00012 12.6668C5.53946 12.6668 3.30746 11.3395 2.29746 9.27483V9.27483C2.10146 8.87416 2.00012 8.4395 2.00012 8.00016Z"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.25"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
        );
      case ReactIcon.WARE_EYE_CLOSED_OUTLINE:
        return (
            <svg
                width={size}
                height={size}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M9.70526 9.03882C9.27889 9.75773 8.45074 10.1361 7.62817 9.98771C6.80561 9.83935 6.1618 9.19555 6.01345 8.37298C5.86509 7.55042 6.24343 6.72226 6.96234 6.2959"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.25"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M11.9974 11.3309C10.8475 12.203 9.44289 12.6731 7.99968 12.6687C5.60828 12.7113 3.39871 11.397 2.29464 9.2753C1.89804 8.47142 1.89804 7.52878 2.29464 6.7249C2.84681 5.62531 3.72701 4.72447 4.8135 4.14697"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.25"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M13.618 9.42318C13.6448 9.37249 13.6796 9.32703 13.7049 9.27537C14.1015 8.4715 14.1015 7.52886 13.7049 6.72498C12.6008 4.60326 10.3912 3.28898 7.99982 3.33157C7.84989 3.33157 7.70416 3.35158 7.55615 3.36133"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.25"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M14.0022 13.3356L2.66418 1.99756"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.25"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
        );
      case ReactIcon.WARE_ERROR:
        return (
            <svg
                width={size}
                height={size}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M13.7931 11.2497L8.29934 1.74972C8.16782 1.52123 7.9784 1.33145 7.75017 1.19949C7.52194 1.06753 7.26297 0.998047 6.99934 0.998047C6.73571 0.998047 6.47673 1.06753 6.2485 1.19949C6.02028 1.33145 5.83086 1.52123 5.69934 1.74972L0.205589 11.2497C0.0721313 11.477 0.00120606 11.7356 1.52462e-05 11.9992C-0.00117557 12.2628 0.0674105 12.522 0.198809 12.7506C0.330207 12.9791 0.519737 13.1688 0.748154 13.3003C0.976571 13.4319 1.23574 13.5007 1.49934 13.4997H12.4993C12.7629 13.5007 13.0221 13.4319 13.2505 13.3003C13.4789 13.1688 13.6685 12.9791 13.7999 12.7506C13.9313 12.522 13.9999 12.2628 13.9987 11.9992C13.9975 11.7356 13.9265 11.477 13.7931 11.2497ZM6.49934 5.99972C6.49934 5.86711 6.55202 5.73993 6.64579 5.64616C6.73955 5.55239 6.86673 5.49972 6.99934 5.49972C7.13195 5.49972 7.25912 5.55239 7.35289 5.64616C7.44666 5.73993 7.49934 5.86711 7.49934 5.99972V8.49972C7.49934 8.63232 7.44666 8.7595 7.35289 8.85327C7.25912 8.94704 7.13195 8.99972 6.99934 8.99972C6.86673 8.99972 6.73955 8.94704 6.64579 8.85327C6.55202 8.7595 6.49934 8.63232 6.49934 8.49972V5.99972ZM6.99934 11.4997C6.851 11.4997 6.706 11.4557 6.58266 11.3733C6.45932 11.2909 6.36319 11.1738 6.30643 11.0367C6.24966 10.8997 6.23481 10.7489 6.26375 10.6034C6.29269 10.4579 6.36412 10.3243 6.46901 10.2194C6.5739 10.1145 6.70753 10.0431 6.85302 10.0141C6.99851 9.98519 7.14931 10 7.28635 10.0568C7.4234 10.1136 7.54053 10.2097 7.62294 10.333C7.70535 10.4564 7.74934 10.6014 7.74934 10.7497C7.74934 10.9486 7.67032 11.1394 7.52967 11.28C7.38902 11.4207 7.19825 11.4997 6.99934 11.4997Z"
                  fill={determinedIconColour}
              />
            </svg>
        );
      case ReactIcon.WARE_ERROR_OUTLINE:
        return (
            <svg
                width={size}
                height={size}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M10.0001 9.72384V6.99854"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.5"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5Z"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.5"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M10 12.7327C9.96433 12.7327 9.93015 12.7469 9.90508 12.7723C9.88002 12.7977 9.86616 12.8321 9.86661 12.8677C9.86794 12.9408 9.92689 12.9998 10 13.0011C10.0746 13.0011 10.1351 12.9406 10.1351 12.8661C10.1351 12.7915 10.0746 12.731 10 12.731"
                  stroke={determinedIconColour}
                  strokeWidth={strokeWidth ?? "1.5"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
            </svg>
        );
      default:
        return null;
    }
  };

  if (!name || hide) return null;

  return getIcon();
};
