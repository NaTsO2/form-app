import { useRef, useState } from "react";
import { Button } from "./Button";
import { X, Image } from "lucide-react";

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
  setValue,
}) => {
  const isClicked = clicked[name];
  const fileUploadRef = useRef();

  const handleImageUpload = () => {
    fileUploadRef.current.click();
  };

  const removeImage = () => {
    setValue((prev) => ({ ...prev, image: "" }));
  };

  const [drag, setDrag] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setValue((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = () => {
    setDrag(false);
  };

  return (
    <div>
      {name !== "image" ? (
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
      ) : value ? (
        <div>
          <img
            src={value}
            alt="image"
            fill="true"
            className="h-[180px] rounded-[8px] object-cover w-full"
          />
          <Button
            style="size-[24px] bg-[#202124] rounded-full cursor-pointer flex items-center justify-center translate-x-90 -translate-y-42"
            deleteIcon={<X className="size-[12px] text-[#FFFFFF]" />}
            onClick={removeImage}
          />
        </div>
      ) : (
        <div>
          <div
            className={`h-[180px] bg-[#7F7F800D] rounded-[8px] flex flex-col items-center justify-center gap-[8px] border ${
              drag ? "border-dashed" : "border-[#7F7F8060]"
            } cursor-pointer`}
            onClick={handleImageUpload}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              name={name}
              type={type}
              // accept="image/*"
              onChange={onChange}
              ref={fileUploadRef}
              hidden
            />
            <div className="bg-[#FFFFFF] rounded-full size-[28px] flex items-center justify-center">
              <Image className="size-[12px]" />
            </div>
            <p className="text-[14px] font-medium">Browse or Drop Image</p>
          </div>
          {errorText && <p className="text-red-500 text-[12px]">{errorText}</p>}
        </div>
      )}
    </div>
  );
};
