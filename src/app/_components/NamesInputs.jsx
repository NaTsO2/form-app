import { Input } from "./Input";

export const NamesInputs = ({
  inputLabels,
  handleChange,
  onFocusIn,
  clicked,
  handleClick,
  setValue
}) => {
  return (
    <>
      {inputLabels.map((inputLabel, index) => {
        return (
          <div key={index} className="flex flex-col gap-[8px] w-full py-[8px]">
            <label className="after:text-red-500 after:content-['*'] after:px-[2px]">
              {inputLabel.title}
            </label>
            <Input
              type={inputLabel.type}
              placeholder={inputLabel.placeholder}
              onChange={handleChange}
              value={inputLabel.value}
              name={inputLabel.name}
              errorText={inputLabel.errorText}
              errorBorder={inputLabel.errorBorder}
              onFocusIn={onFocusIn}
              clicked={clicked}
              setValue={setValue}
              onClick={handleClick}
            />
          </div>
        );
      })}
    </>
  );
};
