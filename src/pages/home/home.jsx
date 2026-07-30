import styles from './home.module.css';
import { Link } from 'react-router';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.heroContent}>
        <h1>Everyday essentials, all in one place.</h1>

        <p className={styles.description}>
          Discover clothing, accessories, jewelry, and electronics selected for
          everyday life.
        </p>

        <Link to="shop" className={styles.shopButton}>
          Shop Now
        </Link>
      </div>
    </main>
  );
}
