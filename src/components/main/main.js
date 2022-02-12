/* eslint-disable no-console */
import React, { Component } from 'react';
import './main.css';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import { getPokemonData, getPokemonSpeciesData } from '../../modules';
import Pokeball from '../images/Pokeball.png';
import axios from 'axios';

class Main extends Component {
    state = {
      isLoading: false,
      shinyMode: false,
      pokemon: '',
      imgFront: '',
      imgBack: '',
      imgFrontShiny: '',
      imgBackShiny: '',
      searchInput: '',
      moves: [],
      types: [],
      evolutionChain: [],
      deName: ''
    }
    // async componentDidMount() {
    //     const eevee = await getPokemonData('eevee')

    //     console.log(eevee)
    //     this.setState({pokemon: eevee.name, imgFront: eevee.sprites.front_default})
    // }

    handleUpdateInput = (e) => {
      this.setState({ searchInput: e.target.value });
    }

    toggleShinyMode = () => this.state.shinyMode ? this.setState({shinyMode: false}) : this.setState({shinyMode: true})

    handleSearchCall = async (newPokemon) => {
      this.setState({ isLoading: true });
      const pokemon = await getPokemonData(typeof newPokemon === 'string' ? newPokemon : this.state.searchInput);
      const evolves = [];
      let deName = '';
      if (pokemon && pokemon.name) {
        const pokemonId = pokemon.id;
        const speciesData = await getPokemonSpeciesData(pokemonId);
        const evolution = await axios.get(speciesData.evolution_chain.url);
        if (evolution && evolution.data) {
          const isBaby = evolution.data.chain.species.name;
          const evol1 = evolution.data.chain.evolves_to[0]?.species.name;
          const evol2 = evolution.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;
          const evol3 = evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.name;
          
          // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png
          if (isBaby) {
            evolves.push({name: isBaby, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.species.url.split('/')[evolution.data.chain.species.url.split('/').length - 2]}.png`});
          }
          if (evol1) {
            evolves.push({name: evol1, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.evolves_to[0]?.species.url.split('/')[evolution.data.chain.evolves_to[0]?.species.url.split('/').length - 2]}.png`});
          }
          if (evol2) {
            evolves.push({name: evol2, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.evolves_to[0]?.evolves_to[0]?.species.url.split('/')[evolution.data.chain.evolves_to[0]?.evolves_to[0]?.species.url.split('/').length - 2]}.png`});
          }
          if (evol3) {
            evolves.push({name: evol3, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url.split('/')[evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url.split('/').length - 2]}.png`});
          }
          deName = speciesData.names.find(i => i.language.name === 'de').name;
        }
        const moves = pokemon.moves.map(i => i.move.name);
        const types = pokemon.types.map(i => i.type.name);
        this.setState({
          isLoading: false,
          pokemon: pokemon.name,
          imgFront: pokemon.sprites.front_default,
          imgBack: pokemon.sprites.back_default,
          imgFrontShiny: pokemon.sprites.front_shiny,
          imgBackShiny: pokemon.sprites.back_shiny,
          moves,
          types,
          evolutionChain: evolves,
          searchInput: pokemon.name,
          deName
        });
      } else if (pokemon && pokemon.includes('404')) {
        this.setState({
          pokemon: 'This pokemon does not exist- try your search again.',
          isLoading: false,
          shinyMode: false,
          imgFront: '',
          imgBack: '',
          imgFrontShiny: '',
          imgBackShiny: '',
          searchInput: '',
          moves: [],
          types: [],
          evolutionChain: []
        });
      }
    }

    render() {
      const {
        pokemon, 
        moves,
        imgFront,
        imgBack,
        imgFrontShiny,
        imgBackShiny,
        shinyMode,
        isLoading,
        types,
        searchInput,
        evolutionChain,
        deName
      } = this.state;
      const pokemonName = pokemon && pokemon.length ? pokemon[0].toUpperCase() + pokemon.slice(1, pokemon.length + 1).toLowerCase() : null;
      return (
        <div className='display'>
          <div>
            <h1>Search any Pokemon!</h1>
          </div>
          <div className='search-container'>
            <input className='search-input' onChange={this.handleUpdateInput} value={searchInput} />
            <div className='search-button' onClick={this.handleSearchCall}>Search!</div>
          </div>
          {isLoading ? (
            <div>
              <p>Loading...</p>
              <img className='loading' src={Pokeball} alt='loading'/>
            </div>) :
            (<div className='results-container'>
              {pokemon ? (<div style={{
                backgroundColor: 'azure',
                border: '5px solid #fff',
                borderRadius: '15px'
              }}>
                <div style={{ color: 'black' }}>
                  <div className='name-container'>
                    <h2>{pokemonName}</h2>
                    {deName ? <em>{deName}</em> : null}
                  </div>
                  {types.length ? <span><ul className='types-list'>
                    <h3>Type(s):</h3> {types.map(type => <li key={type}>{type}</li>)}
                  </ul></span> : null}
                </div>
                {imgFront || imgBack || imgFrontShiny || imgBackShiny ? (
                  <div 
                    onClick={this.toggleShinyMode} 
                    className={shinyMode ? 'shiny-button' : 'normal-button'}>
                      Shiny Mode
                  </div>) : null}
                {shinyMode ? (<div>
                  {imgFrontShiny ?
                    <img className='pokemon-front' src={imgFrontShiny} alt={pokemon} />
                    : null}
                  {imgBackShiny ?
                    <img className='pokemon-front' src={imgBackShiny} alt={pokemon} />
                    : null}
                </div>) : (<div>
                  {imgFront ?
                    <img className='pokemon-front' src={imgFront} alt={pokemon} />
                    : null}
                  {imgBack ?
                    <img className='pokemon-front' src={imgBack} alt={pokemon} />
                    : null}
                </div>)}
              </div>) : null}
              {moves && moves.length ? <div className='moves-list'>
                <ul>
                  <h3>{moves.length} Moves:</h3> {moves.map(move => <li key={move}>{move}</li>)}
                </ul>
              </div> : null}
            </div>)}
          {!isLoading && evolutionChain && evolutionChain.length ? (<div className='evolve-container'>
            <h3>Evolution Chain:</h3>
            <div className='evolves-list'>
              {evolutionChain.map((form, i) => <div onClick={() => this.handleSearchCall(form.name)} className='evolve-item' key={form.name}><img height='100%' src={form.imageUrl} alt={form.name} />{i === evolutionChain.length - 1 ? form.name : form.name + ' -> '}</div>)}
            </div>
          </div>) : null}
        </div>
      );
    }
}

Main.propTypes = {
  color: PropTypes.string
};

export default Main;