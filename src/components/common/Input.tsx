import React from "react";
import { useState } from "react";
import InputError from "./InputError";
import { Eye, EyeOff } from "./svgIcons/svgsIons";

interface SsProps {
  sm: string;
  lg: string;
  md: string;
}

interface Iprops {
  formik: any,
  placeholder: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: string;
  name: string;
  hideErrors?: boolean;
  rest?: any;
  value?: any;
  title?: string;
  disabled?: boolean;
  label?: any;
  image?: any;
  onChange?: any
}

const sizeStyles: SsProps = {
  sm: "px-3 py-4 text-sm",
  md: "px-4 py-4 text-base",
  lg: "px-5 py-5 text-lg",
};

const InputField = ({
  formik,
  placeholder,
  hideErrors,
  size = "md",
  className,
  value,
  type,
  title,
  disabled,
  label,
  image,
  onChange,
  name,
  ...rest
}: Iprops) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">
          {label} <span className="text-danger-200"> *</span>
        </label>
      )}
      <div className={`relative bg-gray ${className ? className : ""}`}>
        <input
          type={type ? (type === "password" ? (showPassword ? "text" : type) : type) : "text"}
          className={`bg-gray block border border-gray-300  rounded-md w-full pl-5 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none placeholder:text-white success:border-primary-600 focus:border-darkBlue disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 
          ${formik?.errors[name] ? "!border-danger-200" : ""} ${sizeStyles[size] && sizeStyles[size]}`}
          title={title}
          name={name}
          id={name}
          value={value}
          onChange={(e) => {
            onChange ? onChange(e) : formik?.handleChange(e)
          }}
          placeholder={placeholder ? placeholder : ""}
          disabled={disabled}
          onBlur={formik.handleBlur}
          onInput={formik.handleBlur}
          {...rest}
        />
        <>
          {!hideErrors && formik?.errors[name] ? (

            <InputError>{formik?.errors[name]}</InputError>
          ) : null}
        </>
        {/* {image && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {image}
          </div>
        )} */}
        {type === "password" ? (
          !showPassword ? (
            <EyeOff
              onClick={() => setShowPassword(true)}
              className="cursor-pointer absolute top-5 right-3 h-5 w-5"
            />
          ) : (
            <Eye
              onClick={() => setShowPassword(false)}
              className="cursor-pointer absolute top-5 right-3 h-5 w-5"
            />
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};
InputField.defaultProps = {
  disabled: false,
  hideErrors: false
}
export default InputField;
