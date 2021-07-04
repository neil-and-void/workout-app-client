import AppNavigation from '../../components/Navigation/AppNavigation';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <AppNavigation>
      <div className={styles.profile}>
        <h1 className="header">Profile</h1>
        <div className={styles.profileContainer}>
          <div className={styles.profilePicture} />
          profile
        </div>
      </div>
    </AppNavigation>
  );
};

export default Profile;
