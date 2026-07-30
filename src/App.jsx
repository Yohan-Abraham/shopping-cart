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
    setStoreData((currentData) =>
      currentData.map((item) =>
        item.title === title
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );

    setInCart((currentCart) =>
      currentCart.map((item) =>
        item.title === title
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function handleDecreaseQuantity(title) {
    setStoreData((currentData) =>
      currentData.map((item) =>
        item.title === title
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );

    setInCart((currentCart) =>
      currentCart.map((item) =>
        item.title === title
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
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
      <NavBar />
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
