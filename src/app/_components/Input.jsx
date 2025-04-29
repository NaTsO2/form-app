export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-[44px] border border-[#CBD5E1] rounded-[8px] px-[10px] focus:outline-1"
    />
  );
};
