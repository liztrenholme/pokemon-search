/* eslint-disable no-console */
import axios from 'axios';

export const getPokemonData = async (pokemonName) => {
  let data = {};
  try {
    data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    
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
  const randNum = Math.floor(Math.random() * 1118);
  console.log('rand is', randNum);
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