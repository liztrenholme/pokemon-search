import Explore from '../index';
import {describe, test, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

describe('Explore', async () => {
  test('Explore button is displayed', async () => {
    render(<Explore 
      header={'Fire Type'} 
      allPokemon={[]}
      regionSpecies={[{name: 'Pyroar', url: '/pyroar'}]}
      handleSearchCall={() => {}}
      populateInput={() => {}} />);
  
    const displayedButton = await screen.getByText('Show all Fire Type species');
  
    expect(displayedButton).toBeInTheDocument();
    fireEvent.click(displayedButton);

    const speciesText = await screen.getByText('Pyroar');
    fireEvent.click(speciesText);

    fireEvent.click(screen.getByText('x'));
  });

  test('Explore button is displayed but species is unavailable', async () => {
    render(<Explore 
      header={'Fire Type'} 
      allPokemon={[]}
      regionSpecies={[]}
      handleSearchCall={() => {}}
      populateInput={() => {}} />);
  
    const displayedButton = await screen.getByText('Show all Fire Type species');
  
    expect(displayedButton).toBeInTheDocument();
    fireEvent.click(displayedButton);
  });
});
