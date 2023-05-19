import React from "react";
import { Props } from "./Basic";
declare type FormState = "normal" | "success" | "error";
declare type FormWrapperProps = Props<"div"> & {
  state?: FormState;
  children: React.ReactElement<
    typeof FormForm | typeof FormSuccessMessage | typeof FormErrorMessage
  >[];
};
declare global {
  interface Window {
    grecaptcha: any;
  }
}
export declare function FormWrapper({
  className,
  state: initialState,
  onSubmit,
  children,
  ...props
}: FormWrapperProps): any;
declare type FormSelect = {
  options: Array<{
    v: string;
    t: string;
  }>;
};
declare type FormProps<T extends keyof HTMLElementTagNameMap> = Props<T>;
export declare function FormForm(props: FormProps<"form">): any;
export declare function FormBlockLabel(props: FormProps<"label">): any;
declare type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputType?: string;
};
export declare function FormTextInput({
  className,
  ...props
}: FormInputProps): any;
declare type FormTextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;
export declare function FormTextarea({
  className,
  ...props
}: FormTextAreaProps): any;
export declare function FormInlineLabel({
  className,
  ...props
}: FormProps<"span">): any;
export declare function FormCheckboxWrapper({
  className,
  ...props
}: FormProps<"label">): any;
export declare function FormRadioWrapper({
  className,
  ...props
}: FormProps<"label">): any;
export declare function FormCheckboxInput({
  className,
  checked,
  ...props
}: FormInputProps): any;
export declare function FormRadioInput({
  className,
  inputType,
  ...props
}: FormInputProps): any;
declare type FileUploadWrapperProps = Props<"div"> & {
  maxSize?: number;
};
export declare function FormFileUploadWrapper({
  maxSize,
  ...props
}: FileUploadWrapperProps): any;
export declare function _FormFileUploadWrapper({
  className,
  ...props
}: FileUploadWrapperProps): any;
export declare function FormFileUploadDefault({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadInput({
  className,
  ...props
}: FormInputProps): any;
export declare function FormFileUploadLabel({
  className,
  ...props
}: FormProps<"label">): any;
export declare function FormFileUploadText({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadInfo({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadUploading({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadUploadingBtn({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadUploadingIcon({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadSuccess({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadFile({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadFileName({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadRemoveLink({
  className,
  ...props
}: FormProps<"div">): any;
export declare function FormFileUploadError({
  className,
  ...props
}: FormProps<"div">): any;
declare type FormErrorMessageProps = HTMLDivElement & {
  errors: {
    SIZE_ERROR: string;
    TYPE_ERROR: string;
    GENERIC_ERROR: string;
  };
};
export declare function FormFileUploadErrorMsg({
  errors,
  className,
  ...props
}: FormErrorMessageProps): any;
export declare function FormButton({
  className,
  value,
  ...props
}: FormInputProps): any;
export declare function SearchForm(props: FormProps<"form">): any;
export declare function SearchInput({
  className,
  ...props
}: FormInputProps): any;
export declare function SearchButton({
  value,
  className,
  ...props
}: FormInputProps): any;
export declare function FormSuccessMessage({
  className,
  ...props
}: Props<"div">): any;
export declare function FormErrorMessage({
  className,
  ...props
}: Props<"div">): any;
export declare function FormSelect({
  options,
  className,
  ...props
}: FormProps<"select"> & FormSelect): any;
declare type FormReCaptchaProps = {
  siteKey: string;
  theme?: "light" | "dark";
  size?: "compact" | "normal" | "invisible";
};
export declare function FormReCaptcha({
  siteKey,
  theme,
  size,
}: FormReCaptchaProps): JSX.Element;
export {};
