import { Button } from "./Button";
import { X } from "lucide-react";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  errorText,
  errorBorder,
  onFocusIn,
  clicked,
}) => {
  const isClicked = clicked[name];

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={onFocusIn}
        onChange={onChange}
        className={`h-[44px] w-full border  ${
          isClicked && errorText ? errorBorder : "border-[#CBD5E1]"
        } rounded-[8px] px-[10px] focus:outline-1`}
      />
      {errorText && <p className="text-red-500 text-[12px]">{errorText}</p>}
    </div>
  );
};
