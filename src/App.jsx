import './App.css';
import { Outlet } from 'react-router';
import { NavBar } from './components/navbar/navbar';
import { useEffect, useState } from 'react';
import organizeData from './api/api';

function App() {
  const [storeData, setStoreData] = useState();
  const [categories, setCategories] = useState();
  const [activeCategory, setActiveCategory] = useState({});

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
        }}
      />
    </>
  );
}

export default App;
