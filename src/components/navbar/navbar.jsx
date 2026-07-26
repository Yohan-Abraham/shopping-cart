import { Link } from 'react-router';
import styles from './navbar.module.css';

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLinks} to="/">
        <h2> Shopping Cart</h2>
      </Link>
      <div>
        <Link className={styles.navLinks} to="/">
          Home
        </Link>
        <Link className={styles.navLinks} to="shop">
          Shop
        </Link>
        <Link className={styles.navLinks} to="cart">
          Cart
        </Link>
      </div>
    </nav>
  );
}
