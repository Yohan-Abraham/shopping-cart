import './App.css';
import { Outlet } from 'react-router';
import { NavBar } from './components/navbar/navbar';
import { useEffect } from 'react';
import organizeData from './api/api';

function App() {
  useEffect(() => {
    async function loadData() {
      const data = await organizeData();
      console.log(data);
    }

    loadData();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
