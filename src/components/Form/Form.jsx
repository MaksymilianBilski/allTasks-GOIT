export const Form = ({
  value,
  handleChange,
  handleSubmit,
  name,
  type,
  placeholder,
  children,
}) => {
  return (
    <form>
      <input
        type={type}
        name={name}
        onSubmit={handleSubmit}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
      {children}
    </form>
  );
};
