import { useOutletContext } from 'react-router';
import styles from './shop.module.css';
import Card from '../../components/card/card';

export default function Shop() {
  const {
    categories,
    activeCategory,
    handleActiveCategory,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleCartAddition,
  } = useOutletContext();
  if (!categories || !activeCategory.data) {
    return <section className={styles.shop}>Loading...</section>;
  }

  return (
    <section className={styles.shop}>
      <ul className={styles.categories}>
        {Array.from(categories).map((item) => {
          return (
            <button key={item} onClick={() => handleActiveCategory(item)}>
              {item}
            </button>
          );
        })}
      </ul>

      <div className={styles.itemContainer}>
        {activeCategory.data.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleCartAddition={handleCartAddition}
              type="shop"
            />
          );
        })}
      </div>
    </section>
  );
}
