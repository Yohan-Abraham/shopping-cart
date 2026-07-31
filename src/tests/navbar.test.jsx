import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { NavBar } from '../components/navbar/navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar', () => {
  it('renders text and links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const shopLink = screen.getByRole('link', { name: /shop/i });
    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute('href', '/shop');

    const cartLink = screen.getByRole('link', { name: /cart/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });
});
