import { render, screen } from '@testing-library/react';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import Shop from '../pages/shop/shop';

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
  {
    id: 2,
    title: 'Test Shirt',
    image: '/shirt.jpg',
    price: 24.99,
    rating: 4.1,
    quantity: 1,
    category: "men's clothing",
  },
];

function TestLayout() {
  return (
    <Outlet
      context={{
        categories: ['All', "men's clothing"],
        activeCategory: {
          category: 'All',
          data: products,
        },
        handleActiveCategory: vi.fn(),
        handleCartAddition: vi.fn(),
      }}
    />
  );
}

describe('Shop', () => {
  it('renders a card for every product', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <TestLayout />,
        children: [
          {
            index: true,
            element: <Shop />,
          },
        ],
      },
    ]);

    render(<RouterProvider router={router} />);

    expect(screen.getByText('Test Jacket')).toBeInTheDocument();
    expect(screen.getByText('Test Shirt')).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /test jacket/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /test shirt/i }),
    ).toBeInTheDocument();
  });
});
