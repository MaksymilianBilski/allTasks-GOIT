import Button from 'components/Button/Button';

const Filters = () => {
  return (
    <section>
      <h3>Filters</h3>
      <Button children="all" />
      <Button children="active" />
      <Button children="completed" />
    </section>
  );
};

export default Filters;
