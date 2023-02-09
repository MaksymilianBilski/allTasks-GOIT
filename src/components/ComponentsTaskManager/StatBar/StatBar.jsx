const StatBar = ({ completed, incompleted }) => {
  return (
    <section>
      <h3>Tasks</h3>
      <ul>
        <li>completed: {completed}</li>
        <li>incompleted: {incompleted}</li>
      </ul>
    </section>
  );
};

export default StatBar;
