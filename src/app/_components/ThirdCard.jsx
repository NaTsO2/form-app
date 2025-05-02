import { Header } from "./Header";
import { NamesInputs } from "./NamesInputs";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./Button";
import { differenceInYears } from "date-fns";
import { useState } from "react";

export const ThirdCard = ({
  comp,
  index,
  stepBack,
  value,
  errorText,
  setErrorText,
  setIndex,
  handleChange,
  onFocusIn,
  clicked,
  setClicked,
  setValue,
}) => {

  const stepThird = () => {
    const age = differenceInYears(new Date(), new Date(value.date));
    const validationErrors = {};
    if (!value.date) {
      validationErrors.date = "Он сар өдрөө оруулчих";
    } else if (age < 18) {
      validationErrors.date = "Насанд хүрсэн байх хэрэгтэй";
    }

    if (!value.image) {
      validationErrors.image = "Гоё зургаа оруулаарай";
    } else if (!/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value.image)) {
      validationErrors.image = "Зураг л оруулна хө";
    }
    setErrorText(validationErrors);
    const updatedClicked = {};
    Object.keys(value).forEach((key) => {
      updatedClicked[key] = true;
    });
    setClicked(updatedClicked);
    if (Object.keys(validationErrors).length === 0) {
      setIndex((prev) => prev + 1);
    }
  };

  const btnsStyle = [
    {
      text: `Continue ${index + 1}/${comp.length - 1}`,
      style:
        "flex flex-2/3  justify-center items-center h-[44px]  rounded-[6px] border-none cursor-pointer text-[#FFFFFF] bg-[#121316]",
      arrow: <ChevronRight className="size-[18px]" />,
      onClick: stepThird,
    },
    {
      text: "Back",
      style:
        "flex flex-row-reverse flex-1/3 justify-center items-center rounded-[6px] h-[44px] cursor-pointer text-[#000000] bg-[#FFFFFF] border border-[#00000050]",
      arrow: <ChevronLeft className="size-[18px]" />,
      onClick: stepBack,
    },
  ];
  const inputLabels = [
    {
      title: "Date of birth",
      placeholder: "төрсөн өдрөө оруул",
      type: "date",
      errorText: errorText.date,
      errorBorder: "border-red-500",
      value: value.date,
      name: "date",
    },
    {
      title: "Profile image",
      placeholder: "Зургаа оруул",
      type: "file",
      errorText: errorText.image,
      errorBorder: "border-red-500",
      value: value.image,
      name: "image",
    },
  ];
  return (
    <div className="p-[32px] bg-[#FFFFFF] rounded-[8px] m-[40px] ">
      <Header />
      <NamesInputs
        inputLabels={inputLabels}
        value={value}
        onFocusIn={onFocusIn}
        clicked={clicked}
      />
      <div className="flex flex-row-reverse mt-[50px] gap-[8px]">
        {btnsStyle.map((btn, index) => {
          return (
            <Button
              key={index}
              style={btn.style}
              arrow={btn.arrow}
              text={btn.text}
              onClick={btn.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};
