import {
  getPokemonData,
  getAnyUrl,
  getEvolutionData,
  getPokemonSpeciesData,
  getRandomPokemon,
  getItemsData
} from './index';
import axios from 'axios';

import {describe, test, vi, expect, beforeEach} from 'vitest';
import '@testing-library/jest-dom';


describe('Modules functions', async() => {
  vi.mock('axios');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('getPokemonData success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getPokemonData('jigglypuff');
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getPokemonData success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getPokemonData(['jigglypuff']);
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getPokemonData failure', async() => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    await expect(getPokemonData('jigglypuff')).rejects.toThrow('Request failed');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('getAnyUrl success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getAnyUrl('/any-url');
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getAnyUrl failure', async() => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    await expect(getAnyUrl('/any-url')).rejects.toThrow('Request failed');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('getEvolutionData success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getEvolutionData('jigglypuff');
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getEvolutionData failure', async() => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    await expect(getEvolutionData('jigglypuff')).rejects.toThrow('Request failed');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('getPokemonSpeciesData success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getPokemonSpeciesData('jigglypuff');
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getPokemonSpeciesData failure', async() => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    await expect(getPokemonSpeciesData('jigglypuff')).rejects.toThrow('Request failed');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('getRandomPokemon success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getRandomPokemon('jigglypuff');
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getRandomPokemon failure', async() => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    await expect(getRandomPokemon('jigglypuff')).rejects.toThrow('Request failed');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('getItemsData success', async() => {
    const mockResponse = { data: { key: 'value' } };
    axios.get.mockResolvedValue(mockResponse);
    const actual = await getItemsData('jigglypuff');
    expect(actual).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1); 
  });

  test('getItemsData failure', async() => {
    axios.get.mockRejectedValue(new Error('Request failed'));
    await expect(getItemsData('jigglypuff')).rejects.toThrow('Request failed');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});