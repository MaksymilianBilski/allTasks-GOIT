const Contact = ({ name, number, id, handleRemove }) => {
  return (
    <li>
      Name: {name}, Number: {number}
      <button onClick={() => handleRemove(id)}>remove</button>
    </li>
  );
};

export default Contact;
