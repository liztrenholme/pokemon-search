import Items from '../index';
import {describe, test, vi, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

const mockIndividualItem = vi.fn();

describe('Items', async () => {
  test('Items are displayed with selectedItem set', async () => {
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
      allItems={{results: ['pokeball', 'ultraball'], previous: true}}
      getAnyUrl={() => {
        return {results: ['elixir', 'potion']};
      }}
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

  test('selectedItem is missing information', async () => {
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
      allItems={{results: ['pokeball', 'ultraball'], previous: true}}
      getAnyUrl={() => {
        return {results: ['elixir', 'potion']};
      }}
      selectedItem={{
        name: 'ultraball', 
        cost: 800, 
        sprites: {
          default: null}, 
        category: {
          name: 'balls'
        },
        attributes: [],
        held_by_pokemon: [],
        effect_entries: []
      }}
      handleDisplayList={() => {}}
      displayed={true}
      allPokemon={[]}
      handleSearchCall={() => {}}
      handleSelectItem={() => {}} />);

    // const imgToClick = await screen.getByTestId('held-by-img-test');
    // fireEvent.click(imgToClick);
    fireEvent.click(screen.getByText('Previous'));
    const itemName = await screen.getByText('ultraball');
    expect(itemName).toBeInTheDocument();
  });

  test('selectedItem is missing other information', async () => {
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
      allItems={{results: ['pokeball', 'ultraball'], previous: false, next: '940&'}}
      getAnyUrl={() => {
        return {results: ['elixir', 'potion']};
      }}
      selectedItem={{
        name: 'ultraball', 
        cost: 800, 
        sprites: {
          default: null}, 
        category: {
          name: 'balls'
        },
        attributes: [],
        held_by_pokemon: [],
        effect_entries: []
      }}
      handleDisplayList={() => {}}
      displayed={true}
      allPokemon={[]}
      handleSearchCall={() => {}}
      handleSelectItem={() => {}} />);

    // const imgToClick = await screen.getByTestId('held-by-img-test');
    // fireEvent.click(imgToClick);
    fireEvent.click(screen.getByText('Previous'));
    const itemName = await screen.getByText('ultraball');
    expect(itemName).toBeInTheDocument();
  });

  test('displayed is false', async () => {
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
      allItems={{results: ['pokeball', 'ultraball'], previous: false, next: true}}
      getAnyUrl={() => {
        return {results: ['elixir', 'potion']};
      }}
      selectedItem={null}
      handleDisplayList={() => {}}
      displayed={false}
      allPokemon={[]}
      handleSearchCall={() => {}}
      handleSelectItem={() => {}} />);

    // const imgToClick = await screen.getByTestId('held-by-img-test');
    // fireEvent.click(imgToClick);
    // fireEvent.click(screen.getByText('Previous'));
    // const itemName = await screen.getByText('ultraball');
    // expect(itemName).toBeInTheDocument();
  });
});
