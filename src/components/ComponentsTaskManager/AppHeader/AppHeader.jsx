import Filters from '../Filters/Filters';
import StatBar from '../StatBar/StatBar';
import css from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header>
      <section className={css.headerWrapper}>
        <StatBar />
        <Filters />
      </section>
    </header>
  );
};

export default AppHeader;
