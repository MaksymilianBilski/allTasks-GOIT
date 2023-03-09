export const Form = ({
  value,
  handleChange,
  handleInputSubmit,
  handleFormSubmit,
  name,
  type,
  placeholder,
  children,
  classNameInput,
  classNameForm,
}) => {
  return (
    <form className={classNameForm} onSubmit={handleFormSubmit}>
      <input
        className={classNameInput}
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
