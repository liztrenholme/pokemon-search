/* eslint-disable no-console */
import axios from 'axios';

export const getPokemonData = async (pokemonName) => {
  let data = {};
  try {
    data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${typeof pokemonName === 'string' ? pokemonName.toLowerCase() : pokemonName}`);
    
  } catch(e) {
    console.log('error fetching', e);
    return 'Error ' + e; 
  }
  if (data && Object.keys(data)) {
    return data.data;
  }
};

export const getAnyUrl = async (url) => {
  let data = {};
  try {
    data = await axios.get(url);
    
  } catch(e) {
    console.log('error fetching', e);
    return 'Error ' + e; 
  }
  if (data && Object.keys(data)) {
    return data.data;
  }
};

export const getEvolutionData = async (pokemonId) => {
  let data = {};
  try {
    data = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`);
    
  } catch(e) {
    console.log('error fetching', e);
    return 'Error ' + e; 
  }
  if (data && Object.keys(data)) {
    return data.data;
  }
};

export const getPokemonSpeciesData = async (pokemonId) => {
  let data = {};
  try {
    data = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        
  } catch(e) {
    console.log('error fetching', e);
    return 'Error ' + e; 
  }
  if (data && Object.keys(data)) {
    return data.data;
  }
};

export const getRandomPokemon = async () => {
  let data = {};
  const randNum = Math.floor(Math.random() * 898);
  try {
    data = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${randNum}`);
        
  } catch(e) {
    console.log('error fetching', e);
    return 'Error ' + e; 
  }
  if (data && Object.keys(data)) {
    return data.data;
  }
};

export const getItemsData = async () => {
  let data = {};
  try {
    data = await axios.get('https://pokeapi.co/api/v2/item/');
    
  } catch(e) {
    console.log('error fetching', e);
    return 'Error ' + e; 
  }
  if (data && Object.keys(data)) {
    return data.data;
  }
};