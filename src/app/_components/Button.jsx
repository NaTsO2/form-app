export const Button = ({ text, style, arrow, onClick }) => {
  return (
    <button className={`${style} focus: outline-0.2`} onClick={onClick}>
      {text} {arrow}
    </button>
  );
};
