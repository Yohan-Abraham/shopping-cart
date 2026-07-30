import styles from './card.module.css';

export default function Card({
  title,
  price,
  image,
  quantity,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleCartAddition,
  handleCartRemoval,
  type,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.productInfo}>
        <div>{title}</div>
        <h4>${price}</h4>
        <div className={styles.quantity}>
          <button
            onClick={() => {
              if (quantity !== 0) return handleDecreaseQuantity(title);
            }}
          >
            -
          </button>
          Quantity: {quantity}
          <button onClick={() => handleIncreaseQuantity(title)}>+</button>
        </div>
        {type == 'shop' ? (
          <button
            onClick={() => handleCartAddition(title, price, image, quantity)}
          >
            Add To Cart
          </button>
        ) : (
          <button onClick={() => handleCartRemoval(title)}>Remove Item</button>
        )}
      </div>
    </div>
  );
}
