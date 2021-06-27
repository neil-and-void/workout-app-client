import { useRouter } from 'next/router'
import Button from '../components/Button';
import styles from './Home.module.scss';

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.home}>
      <div className={styles.loginButtons}>
        <Button className={styles.loginButton} onClick={() => router.push('/login')}>
          Login with email
      </Button>
        <Button className={`${styles.loginButton} ${styles.googleLogin}`} onClick={() => console.log('hi')}>
          Login with google
      </Button>
      </div>
    </div>
  )
}

export default Home;
