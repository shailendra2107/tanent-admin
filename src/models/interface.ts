import React from "react";
import { TextBoxType } from "devextreme/ui/text_box";
import { DateType } from "devextreme/ui/date_box";

export interface InputProps {
  value?: any;
  name?: string;
  placeholder?: string;
  onHandleChange?: ((e: any) => void) | undefined;
  error?: string;
  type?: any;
  classNames?: string;
  mode?: any;
  label?: any;
  icon?: any;
}
export interface ITextAreaProps {
  value?: any;
  name?: string | undefined;
  placeholder?: string;
  onHandleChange?: ((e: any) => void) | undefined;
  error?: string;
  type?: string;
  classNames?: string;
  mode?: any;
  label?: any;
  height?: number;
  maxLength?: number;
}
export interface IDateProps {
  type?: DateType | undefined;
  classNames?: string;
}
export interface IconProps {
  src?: string | any;
  fill?: string;
  height?: string;
  width?: number;
  classNames?: string;
}
interface ISelectItems {
  name: string;
  Id: any;
  ID: any;
}
interface IdataProps {
  data: ISelectItems[];
  key: any;
}
export interface ISelectProps {
  value?: string;
  classNames?: string;
  defaultValue?: any;
  displayExpr?: string;
  valueExpr?: string;
  onHandleChange?: ((e: any) => void) | undefined;
  items?: ISelectItems[];
  mode?: any;
  label?: any;
}
export interface IUserProps {
  email?: string;
  password?: string;
  rememberMe?: boolean;
}
export interface IModalProps {
  visible?: boolean;
  showCloseButton?: boolean;
  title?: string;
  text?: string;
  isShow?: string;
  width?: number | string;
  height?: number | string;
}
