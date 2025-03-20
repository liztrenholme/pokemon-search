import Items from '../index';
import {describe, test, vi, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

const mockIndividualItem = vi.fn();

describe('Items', async () => {
  test('Item name is displayed', async () => {
    vi.mock('../IndividualItem', () => ({ 
      default: (props) => {
        mockIndividualItem(props);
        return <div 
          onClick={props.handleSelectItem}>
          {props.item.name}
        </div>;
      }, 
    }));
    render(<Items 
      header='Show All Items'
      allItems={{results: ['pokeball', 'ultraball']}}
      getAnyUrl={() => {({results: []});}}
      selectedItem={{
        name: 'ultraball', 
        cost: 800, 
        sprites: {
          default: null}, 
        category: {
          name: 'balls'
        },
        attributes: [{name: 'a'}, {name: 'b'}],
        held_by_pokemon: [{pokemon: {name: 'rockruff', url: '/rockruff'}}],
        effect_entries: [{language: {name: {en: {short_effect: 'The ultraball is black and yellow.'}}}}]
      }}
      handleDisplayList={() => {}}
      displayed={true}
      allPokemon={[]}
      handleSearchCall={() => {}}
      handleSelectItem={() => {}} />);

    const imgToClick = await screen.getByTestId('held-by-img-test');
    fireEvent.click(imgToClick);
    fireEvent.click(screen.getByText('Previous'));
    const itemName = await screen.getByText('ultraball');
    expect(itemName).toBeInTheDocument();
  });
});
