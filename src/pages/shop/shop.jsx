import { useOutletContext } from 'react-router';
import styles from './shop.module.css';
import Card from '../../components/card/card';

export default function Shop() {
  const { storeData, categories, activeCategory, handleActiveCategory } =
    useOutletContext();
  console.log(activeCategory.data);
  if (!categories || !storeData) {
    return <h1>loading...</h1>;
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
              rating={item.rating}
            />
          );
        })}
      </div>
    </section>
  );
}
