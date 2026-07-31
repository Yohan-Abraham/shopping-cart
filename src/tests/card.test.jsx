import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Card from '../components/card/card';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  it('renders the product information', async () => {
    const product = {
      title: 'Test Jacket',
      image: 'https://example.com/jacket.jpg',
      price: 49.99,
      quantity: 4,
    };

    const handleIncreaseQuantity = vi.fn();
    const handleDecreaseQuantity = vi.fn();
    const handleCartAddition = vi.fn();
    const handleCartRemoval = vi.fn();

    render(
      <Card
        title={product.title}
        image={product.image}
        price={product.price}
        quantity={product.quantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleCartAddition={handleCartAddition}
        handleCartRemoval={handleCartRemoval}
      />,
    );

    const incrementButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });
    const decrementButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    expect(screen.getByText(/test jacket/i)).toBeInTheDocument();

    expect(screen.getByText(/\$49\.99/)).toBeInTheDocument();

    expect(screen.getByText('Quantity: 4')).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /test jacket/i })).toHaveAttribute(
      'src',
      product.image,
    );

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();

    await userEvent.click(incrementButton);

    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);
    expect(handleIncreaseQuantity).toHaveBeenCalledWith('Test Jacket');

    await userEvent.click(decrementButton);

    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1);
    expect(handleIncreaseQuantity).toHaveBeenCalledWith('Test Jacket');
  });
});
