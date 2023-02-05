const Button = ({ name, type, handleClick }) => {
  return (
    <button onClick={handleClick} type={type}>
      {name}
    </button>
  );
};

export default Button;
