import AuthGuard from '../../components/Guard';
import AppNavigation from '../../components/Navigation/AppNavigation';
import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <AuthGuard>
      <AppNavigation>
        <div className={styles.stats}>
          <h1 className="header">Stats</h1>
          <div>coming soon!</div>
        </div>
      </AppNavigation>
    </AuthGuard>
  );
};

export default Stats;
