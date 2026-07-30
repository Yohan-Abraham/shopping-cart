import styles from './cart.module.css';
import { useOutletContext } from 'react-router';
import Card from '../../components/card/card';

export default function Cart() {
  const {
    inCart,
    handleCartRemoval,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    totalCheckoutPrice,
  } = useOutletContext();

  return (
    <section className={styles.cart}>
      <div>
        <h2>Cart</h2>
        <div className={styles.cartContainer}>
          {inCart.map((item) => {
            return (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleCartRemoval={handleCartRemoval}
                type="cart"
              />
            );
          })}
        </div>
      </div>
      <div className={styles.cartDetails}>
        <h2>Details</h2>

        {inCart.map((item) => {
          return (
            <div key={item.title} className={styles.itemBreakDown}>
              <div>{item.title}</div>
              <div className={styles.priceBreakDown}>
                {item.quantity} x {item.price}
              </div>
              <div className={styles.itemPrice}>
                ${(item.quantity * item.price).toFixed()}
              </div>
            </div>
          );
        })}
        <div className={styles.totalPrice}>
          Total Price <div>${totalCheckoutPrice.toFixed()}</div>
        </div>
      </div>
    </section>
  );
}
