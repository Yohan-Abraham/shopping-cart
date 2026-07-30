import styles from './card.module.css';

export default function Card({ title, price, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.productInfo}>
        <div>{title}</div>
        <h4>${price}</h4>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
