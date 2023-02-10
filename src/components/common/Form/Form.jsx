export const Form = ({
  value,
  handleChange,
  handleInputSubmit,
  handleFormSubmit,
  name,
  type,
  placeholder,
  children,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type={type}
        name={name}
        onSubmit={handleInputSubmit}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
      {children}
    </form>
  );
};
