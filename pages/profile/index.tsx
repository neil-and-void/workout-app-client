import AppNavigation from '../../components/Navigation/AppNavigation';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <AppNavigation>
      <div className={styles.profile}>
        <div className={styles.profilePicture} />
        profile
      </div>
    </AppNavigation>
  );
};

export default Profile;
