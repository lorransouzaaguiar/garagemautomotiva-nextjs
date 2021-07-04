import React from 'react';

import { render, screen } from '@testing-library/react';

import { Header } from '~/components/Header';

test('deve testar se o componente Header existe', () => {
  render(<Header />);
  const element = screen.getByText('Ola');
  expect(element).toBeInTheDocument();
  expect(element.id).toBe('1');
});
