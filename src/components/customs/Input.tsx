import { forwardRef } from "react";
import { IoCalendar } from "react-icons/io5";

const Input = forwardRef<
  HTMLInputElement,
  {
    className?: string;
    readOnly?: boolean;
    placeholder?: string;
  }
>(({ className, readOnly = false, placeholder = "Date" }, ref) => {
  return (
    <label className={`${className} input input-bordered flex items-center gap-2`}>
      <IoCalendar className="w-4 h-4 opacity-75" />
      <input type="text" className="grow" placeholder={placeholder} readOnly={readOnly} ref={ref} />
    </label>
  );
});

export default Input;
