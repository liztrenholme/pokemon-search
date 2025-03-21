import Evolution from '../index';
import {describe, test, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('Evolution', async () => {
  test('Evolution level is displayed with evolve item', async () => {
    render(<Evolution 
      evolutionChain={[
        {level: 1, imageUrl: 'image/litleo.png'}, 
        {level: 2, name: 'Pyroar', evolveItem: 'candle', evolveItemImg: 'image/candle.png', imageUrl: 'image/pyroar.png'}
      ]} 
      selectedLevel={2}
      handleSearchCall={() => {}} />);
  
    const itemName = await screen.getByAltText('Pyroar');
    fireEvent.click(itemName);
    expect(itemName).toBeInTheDocument();
  });

  test('Evolution level is displayed without evolve item', async () => {
    render(<Evolution 
      evolutionChain={[
        {level: 1, imageUrl: 'image/litleo.png'}, 
        {level: 2, name: 'Pyroar'}
      ]} 
      selectedLevel={2}
      handleSearchCall={() => {}} />);
  
    const itemName = await screen.getByAltText('Pyroar');
    fireEvent.click(itemName);
    expect(itemName).toBeInTheDocument();
  });
});
