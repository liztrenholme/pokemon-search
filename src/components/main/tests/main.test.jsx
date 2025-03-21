import Main from '../main';
import {describe, test, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('Main', async () => {
  test('Main renders', async () => {
    render(<Main officialArtImg={'rockruff.img'} pokemonName="Rockruff" />);
  
    // const itemToSelect = await screen.getByText('Official Artwork');
    // fireEvent.click(itemToSelect);
  
    // const itemName = await screen.getByAltText('Rockruff');
    // expect(itemName).toBeInTheDocument();

    // fireEvent.click(screen.getByText('x'));
  });
});
