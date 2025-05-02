"use client";

import { NamesInputs } from "./NamesInputs";
import { Header } from "./Header";
import { Button } from "./Button";
import { ChevronRight } from "lucide-react";

export const MainCard = ({
  index,
  value,
  comp,
  handleChange,
  errorText,
  setErrorText,
  setIndex,
  onFocusIn,
  clicked,
  setClicked,
}) => {
  const stepOne = () => {
    const validationErrors = {};

    if (!value.firstName) {
      validationErrors.firstName = "Бро нэрээ оруулчих!";
    } else if (
      !/^[\u1800-\u18AF\u0400-\u04FF\s\d.,()-]+$/.test(value.firstName)
    ) {
      validationErrors.firstName = "Бро криллээр биччихээ дараа нь надад амар!";
    }

    if (!value.lastName) {
      validationErrors.lastName = "Одоо овогоо бичнээ бро!";
    } else if (
      !/^[\u1800-\u18AF\u0400-\u04FF\s\d.,()-]+$/.test(value.lastName)
    ) {
      validationErrors.lastName =
        "Нэрээ криллээр биччихээд овогоо англиар бичих юмуу?!";
    }

    if (!value.userName) {
      validationErrors.userName =
        "Чи өөрийгөө энд юу гэж нэрлэмээр байна тэрийгээ оруул!";
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

  const inputLabels = [
    {
      value: value.firstName,
      title: "First name",
      placeholder: "Нэрээ бич",
      type: "text",
      name: "firstName",
      errorText: errorText.firstName,
      errorBorder: "border-red-500",
    },
    {
      value: value.lastName,
      title: "Last name",
      placeholder: "Овогоо бич",
      type: "text",
      name: "lastName",
      errorText: errorText.lastName,
      errorBorder: "border-red-500",
    },
    {
      value: value.userName,
      title: "Username",
      placeholder: "Зохиомол нэр бич",
      type: "text",
      name: "userName",
      errorText: errorText.userName,
      errorBorder: "border-red-500",
    },
  ];

  const style =
    "flex justify-center items-center gap-[2px] w-full h-[44px] px-[32px] rounded-[6px] border-none cursor-pointer mt-[162px] text-[#FFFFFF] bg-[#121316]";
  const arrow = <ChevronRight className="size-[18px]" />;
  return (
    <div className="p-[32px] bg-[#FFFFFF] rounded-[8px] m-[40px]">
      <Header />
      <NamesInputs
        value={value}
        inputLabels={inputLabels}
        handleChange={handleChange}
        errorText={errorText}
        onFocusIn={onFocusIn}
        clicked={clicked}
      />
      <Button
        text={`Continue ${index + 1}/${comp.length - 1}`}
        style={style}
        arrow={arrow}
        onClick={stepOne}
      />
    </div>
  );
};
