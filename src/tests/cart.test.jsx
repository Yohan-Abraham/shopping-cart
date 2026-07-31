import { render, screen } from '@testing-library/react';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import Cart from '../pages/cart/cart';

const products = [
  {
    id: 1,
    title: 'Test Jacket',
    image: '/jacket.jpg',
    price: 49.99,
    rating: 4.5,
    quantity: 1,
    category: "men's clothing",
  },
];

function TestLayout() {
  return (
    <Outlet
      context={{
        inCart: products,
        handleActiveCategory: vi.fn(),
        handleCartAddition: vi.fn(),
        totalCheckoutPrice: products.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
      }}
    />
  );
}

describe('cart component', () => {
  it('cart', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <TestLayout />,
        children: [
          {
            index: true,
            element: <Cart />,
          },
        ],
      },
    ]);

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('checkout price')).toBeInTheDocument();
    expect(screen.getByTestId('product title')).toBeInTheDocument();
    expect(screen.getByTestId('price breakdown')).toBeInTheDocument();
    expect(screen.getByTestId('item price')).toBeInTheDocument();
    expect(screen.getByTestId('checkout price')).toBeInTheDocument();
  });
});
