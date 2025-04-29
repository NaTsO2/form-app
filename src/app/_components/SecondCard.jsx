import { Button } from "./Button";
import { Header } from "./Header";
import { NamesInputs } from "./NamesInputs";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const SecondCard = ({
  comp,
  index,
  setIndex,
  stepBack,
  stepContinue,
}) => {
  const names = [
    { title: "Email", placeholder: "Email хаягаа бич", type: "text" },
    {
      title: "Phone number",
      placeholder: "Утасны дугаараа бич",
      type: "number",
    },
    { title: "Password", placeholder: "Нууц үг зохиож бич", type: "password" },
    {
      title: "Confirm sassword",
      placeholder: "Нууц үгээ давтаж бич",
      type: "password",
    },
  ];

  const btnsStyle = [
    {
      text: `Continue ${index + 1}/${comp.length - 1}`,
      style:
        " flex flex-2/3  justify-center items-center h-[44px]  rounded-[6px] border-none cursor-pointer text-[#FFFFFF] bg-[#121316]",
      arrow: <ChevronRight className="size-[18px]" />,
      onClick: stepContinue,
    },
    {
      text: "Back",
      style:
        "flex flex-row-reverse flex-1/3 justify-center items-center h-[44px]  rounded-[6px] cursor-pointer text-[#000000] bg-[#FFFFFF] border border-[#00000050]",
      arrow: <ChevronLeft className="size-[18px]" />,
      onClick: stepBack,
    },
  ];

  return (
    <div className="p-[32px] bg-[#FFFFFF] rounded-[8px] m-[40px]">
      <Header />
      <NamesInputs names={names} />
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
