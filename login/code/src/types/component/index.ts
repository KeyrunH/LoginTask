import { SkeletonProps } from "react-loading-skeleton";

export type LifeCycle = {
  disabled?: boolean;
  loading?: boolean;
  showAnswer?: boolean;
};

export type Text = {
  colour?: string;
  hoverColour?: string;
  fontWeight?: string;
  role?: string;
  size?: string;
  skeleton?: SkeletonProps;
  styles?: React.CSSProperties;
  value?: string;
};