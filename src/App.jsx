import './App.css';
import { Outlet } from 'react-router';
import { NavBar } from './components/navbar/navbar';
import { useEffect, useState } from 'react';
import organizeData from './api/api';

function App() {
  const [storeData, setStoreData] = useState();
  const [categories, setCategories] = useState();
  const [activeCategory, setActiveCategory] = useState({});
  const [inCart, setInCart] = useState([]);
  const totalCheckoutPrice = inCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function handleCartAddition(title, price, image, quantity) {
    setInCart((currentCart) => {
      const alreadyInCart = currentCart.some((item) => item.title === title);

      if (alreadyInCart) {
        return currentCart;
      }

      return [
        ...currentCart,
        {
          title,
          price,
          image,
          quantity,
        },
      ];
    });
  }

  function handleCartRemoval(title) {
    setInCart((currentCart) =>
      currentCart.filter((item) => item.title !== title),
    );
  }
  function handleActiveCategory(category) {
    if (category == 'All') {
      return setActiveCategory({
        category: category,
        data: storeData,
      });
    }

    setActiveCategory({
      category: category,
      data: storeData.filter((item) => item.category === category),
    });
  }

  function handleIncreaseQuantity(title) {
    const newData = storeData.map((item) => {
      if (title == item.title) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setStoreData(newData);

    setActiveCategory({
      category: activeCategory.category,
      data:
        activeCategory.category === 'All'
          ? newData
          : newData.filter((item) => item.category === activeCategory.category),
    });

    setInCart(
      inCart.map((item) => {
        if (item.title == title) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    );
  }

  function handleDecreaseQuantity(title) {
    const newData = storeData.map((item) => {
      if (title == item.title) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setStoreData(newData);

    setActiveCategory({
      category: activeCategory.category,
      data:
        activeCategory.category === 'All'
          ? newData
          : newData.filter((item) => item.category === activeCategory.category),
    });

    setInCart(
      inCart.map((item) => {
        if (item.title == title) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    );
  }

  useEffect(() => {
    async function loadData() {
      const data = await organizeData();
      const categoryList = new Set();
      setStoreData(data);
      data.map((item) => categoryList.add(item.category));
      setCategories(['All', ...categoryList]);
      setActiveCategory({
        category: 'All',
        data: data,
      });
    }

    loadData();
  }, []);

  return (
    <>
      <NavBar itemsInCart={inCart.length} />
      <Outlet
        context={{
          storeData,
          categories,
          activeCategory,
          handleActiveCategory,
          handleIncreaseQuantity,
          handleDecreaseQuantity,
          handleCartAddition,
          inCart,
          handleCartRemoval,
          totalCheckoutPrice,
        }}
      />
    </>
  );
}

export default App;
