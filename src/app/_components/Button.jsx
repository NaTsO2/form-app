export const Button = ({ text, style, arrow, onClick, deleteIcon }) => {
  return (
    <button
      className={`${style} focus: outline-0.2 `}
      onClick={onClick}
    >
      {text} {arrow} {deleteIcon}
    </button>
  );
};
