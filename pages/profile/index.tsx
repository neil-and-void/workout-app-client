import AuthGuard from '../../components/Guard';
import AppNavigation from '../../components/Navigation/AppNavigation';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <AuthGuard>
      <AppNavigation>
        <div className={styles.profile}>
          <h1 className="header">Profile</h1>
          <div className={styles.profileContainer}>
            <div className={styles.profilePicture} />
            profile
          </div>
          <div className={styles.userInfo}>
            <div className={styles.info}>
              <div>
                5<span className={styles.secondaryText}> ft</span>
              </div>
              <div className={styles.infoLabel}>height</div>
            </div>
            <div className={styles.info}>
              <div>
                155<span className={styles.secondaryText}> lbs</span>
              </div>
              <div className={styles.infoLabel}>weight</div>
            </div>
            <div className={styles.info}>
              <div>
                21<span className={styles.secondaryText}> yrs</span>
              </div>
              <div className={styles.infoLabel}>age</div>
            </div>
          </div>
        </div>
      </AppNavigation>
    </AuthGuard>
  );
};

export default Profile;
