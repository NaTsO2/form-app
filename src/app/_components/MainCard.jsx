"use client";

import { useState } from "react";
import { NamesInputs } from "./NamesInputs";
import { Header } from "./Header";
import { Button } from "./Button";
import { ChevronRight } from "lucide-react";

export const MainCard = ({ stepContinue, index, setIndex, comp }) => {
  const [value, setValue] = useState("");
  const names = [
    {
      title: "First name",
      placeholder: "Нэрээ бич",
      type: "text",
      handleChange: (e) => {
        setValue(e.target.value);
      },
    },
    { title: "Last name", placeholder: "Овогоо бич", type: "text" },
    { title: "Username", placeholder: "Зохиомол нэр бич", type: "text" },
  ];
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const style =
    "flex justify-center items-center gap-[2px] w-full h-[44px] px-[32px] rounded-[6px] border-none cursor-pointer mt-[162px] text-[#FFFFFF] bg-[#121316]";
  const arrow = <ChevronRight className="size-[18px]" />;
  return (
    <div className="p-[32px] bg-[#FFFFFF] rounded-[8px] m-[40px]">
      <Header />
      <NamesInputs value={value} names={names} />
      <Button
        text={`Continue ${index + 1}/${comp.length - 1}`}
        style={style}
        arrow={arrow}
        onClick={stepContinue}
      />
    </div>
  );
};
