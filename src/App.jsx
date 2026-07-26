import './App.css';
import { Outlet } from 'react-router';
import { NavBar } from './components/navbar/navbar';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
