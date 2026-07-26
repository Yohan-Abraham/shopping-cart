import App from './App';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ErrorPage from './errorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
