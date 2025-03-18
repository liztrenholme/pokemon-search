import { render, screen } from '@testing-library/react';
import App from './App';
import {test, expect} from 'vitest';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search any Pokémon!/i);
  expect(linkElement).toBeInTheDocument();
});
