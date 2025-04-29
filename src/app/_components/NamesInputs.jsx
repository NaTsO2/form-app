import { Input } from "./Input";

export const NamesInputs = ({ onChange, value, names }) => {
  return (
    <>
      {names.map((name, index) => {
        return (
          <div key={index} className="flex flex-col gap-[8px] w-full py-[8px]">
            <label className="after:text-red-500 after:content-['*'] after:px-[2px]">
              {name.title}
            </label>
            <Input
              type={name.type}
              placeholder={name.placeholder}
              onChange={name.handleChange}
              value={value}
            />
          </div>
        );
      })}
    </>
  );
};
