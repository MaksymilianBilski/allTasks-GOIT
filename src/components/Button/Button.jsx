const Button = ({ handleClick, type, children }) => {
  return (
    <button onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
