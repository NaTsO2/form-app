import { Button } from "./Button";
import { Header } from "./Header";
import { NamesInputs } from "./NamesInputs";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const SecondCard = ({
  comp,
  index,
  stepBack,
  value,
  errorText,
  setErrorText,
  setIndex,
  handleChange,
  onFocusIn,
  setClicked,
  clicked,
}) => {
  const stepTwo = () => {
    const validationErrors = {};

    if (!value.email) {
      validationErrors.email = "Email хаягаа оруулна уу!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) {
      validationErrors.email = "Email хаягаа зөв оруулаач @ тэмдэг нтр хаачсын";
    }
    if (!value.password) {
      validationErrors.password = "Нууц үгээ оруулаа БРО";
    } else if (value.password.length < 6) {
      validationErrors.password = "Арай богинохон уу бро дахиад нэмээд бич";
    }

    if (!value.confirmPassword) {
      validationErrors.confirmPassword = "Нууц үгээ давтаж бич";
    } else if (value.confirmPassword != value.password) {
      validationErrors.confirmPassword =
        "Одоо болнээ дээр бичсэнээ л давтаад бич";
    }

    if (!value.phoneNumber) {
      validationErrors.phoneNumber = "Өөрийнхөө дугаарыг бич би залгана";
    } else if (!/^\+?\d{8}$/.test(value.phoneNumber)) {
      validationErrors.phoneNumber = "Дугаараа биччихээ";
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
      title: "Email",
      placeholder: "Email хаягаа бич",
      type: "text",
      errorText: errorText.email,
      errorBorder: "border-red-500",
      value: value.email,
      name: "email",
    },
    {
      title: "Phone number",
      placeholder: "Утасны дугаараа бич",
      type: "tel",
      errorText: errorText.phoneNumber,
      errorBorder: "border-red-500",
      value: value.phoneNumber,
      name: "phoneNumber",
    },
    {
      title: "Password",
      placeholder: "Нууц үг зохиож бич",
      type: "password",
      errorText: errorText.password,
      errorBorder: "border-red-500",
      value: value.password,
      name: "password",
    },
    {
      title: "Confirm password",
      placeholder: "Нууц үгээ давтаж бич",
      type: "password",
      errorText: errorText.confirmPassword,
      errorBorder: "border-red-500",
      value: value.confirmPassword,
      name: "confirmPassword",
    },
  ];

  const btnsStyle = [
    {
      text: `Continue ${index + 1}/${comp.length - 1}`,
      style:
        " flex flex-2/3  justify-center items-center h-[44px]  rounded-[6px] border-none cursor-pointer text-[#FFFFFF] bg-[#121316]",
      arrow: <ChevronRight className="size-[18px]" />,
      onClick: stepTwo,
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
      <NamesInputs
        inputLabels={inputLabels}
        value={value}
        handleChange={handleChange}
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
      <p className="text-center text-[12px] pt-[18px]">
        Made by <span className="text-blue-500">NaTsO</span>
      </p>
    </div>
  );
};
