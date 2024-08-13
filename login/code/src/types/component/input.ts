import { Dayjs } from "dayjs";

export type inputInfo = {
  name: string;
  originDateTime?: Dayjs;
  codeValues?: string[];
  passShowHideIcon?: boolean;
  showPasswordByDefault?: boolean;
  numberOfLines?: number;
  tabIndex?: number;
  min?: number | string;
  max?: number | string;
};
