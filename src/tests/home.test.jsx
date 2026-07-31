import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../pages/home/home';
import { describe, it, expect } from 'vitest';

describe('Renders message and shop link', () => {
  it('renders home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', {
        name: /everyday essentials, all in one place/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /discover clothing, accessories, jewelry, and electronics selected for everyday life/i,
      ),
    ).toBeInTheDocument();

    const shopLink = screen.getByRole('link', { name: /shop now/i });

    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute('href', '/shop');
  });
});
