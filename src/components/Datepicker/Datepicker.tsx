import ReactTailwindDatepicker from "react-tailwindcss-datepicker";
import type { DatepickerType as ReactTailwindDatepickerProps } from "react-tailwindcss-datepicker";

export interface DatepickerProps
  extends Pick<
    ReactTailwindDatepickerProps,
    | "dateLooking"
    | "disabled"
    | "displayFormat"
    | "inputId"
    | "maxDate"
    | "minDate"
    | "onChange"
    | "placeholder"
    | "separator"
    | "value"
  > {
  variant: "single" | "range";
}

const Datepicker = ({
  dateLooking,
  disabled,
  displayFormat,
  inputId,
  maxDate,
  minDate,
  placeholder,
  separator,
  value,
  onChange,
  variant,
}: DatepickerProps) => {
  const variantProps: Pick<
    ReactTailwindDatepickerProps,
    "asSingle" | "useRange"
  > =
    variant === "single"
      ? { asSingle: true, useRange: false }
      : { asSingle: false, useRange: true };

  return (
    <>
      <ReactTailwindDatepicker
        {...variantProps}
        readOnly
        dateLooking={dateLooking}
        disabled={disabled}
        displayFormat={displayFormat}
        inputId={inputId}
        maxDate={maxDate}
        minDate={minDate}
        placeholder={placeholder}
        separator={separator}
        value={value}
        onChange={onChange}
        asSingle={variant === "single" ? true : false}
        useRange={variant === "single" ? false : true}
        inputClassName=" "
        toggleClassName="absolute right-0 h-full px-3 transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
      />
    </>
  );
};
export default Datepicker;
