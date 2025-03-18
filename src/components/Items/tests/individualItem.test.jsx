import IndividualItem from '../individualItem';
import {describe, test, beforeEach, vi, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('IndividualItem', async () => {
  test('Item name is displayed', async () => {
    render(<IndividualItem item={{name: 'rockruff', url: '/rockruff'}} handleSelectItem={() => {}} />);
  
    const itemToSelect = await screen.getByTestId('item-test');
    fireEvent.click(itemToSelect);
  
    const itemName = await screen.getByText('rockruff');
    expect(itemName).toBeInTheDocument();
  });

  test('Item image is displayed', async () => {
    render(<IndividualItem item={{name: 'tapu-koko-tm', url: '/tapu-koko'}} handleSelectItem={() => {}} />);
  
    const itemName = await screen.getByAltText('tapu-koko-tm');
    expect(itemName).toBeInTheDocument();
  });
});
