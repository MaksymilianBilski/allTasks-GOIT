const Button = ({ name, type, handleClick, className }) => {
  return (
    <button name={name} className={className} onClick={handleClick} type={type}>
      {name}
    </button>
  );
};

export default Button;
