import { Link } from 'react-router';
import styles from './navbar.module.css';

export function NavBar({ itemsInCart }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>Shopping Cart</div>
      <div className={styles.navContainer}>
        <Link className={styles.navLinks} to="/">
          Home
        </Link>
        <Link className={styles.navLinks} to="shop">
          Shop
        </Link>
        <Link className={styles.navLinks} to="cart">
          Cart ({itemsInCart})
        </Link>
      </div>
    </nav>
  );
}
