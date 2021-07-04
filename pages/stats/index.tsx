import AppNavigation from '../../components/Navigation/AppNavigation';
import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <AppNavigation>
      <div className={styles.stats}>
        <h1 className="header">Stats</h1>
      </div>
    </AppNavigation>
  );
};

export default Stats;
