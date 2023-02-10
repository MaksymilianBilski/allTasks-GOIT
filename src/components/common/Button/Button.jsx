const Button = ({ handleClick, type, children, selected }) => {
  return (
    <button selected={selected} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
