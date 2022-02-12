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
      evolutionChain: []
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

    handleSearchCall = async () => {
      this.setState({ isLoading: true });
      const pokemon = await getPokemonData(this.state.searchInput);
      const evolves = [];
      console.log('pokemon fetched!', pokemon);
      if (pokemon && pokemon.name) {
        const pokemonId = pokemon.id;
        const speciesData = await getPokemonSpeciesData(pokemonId);
        const evolution = await axios.get(speciesData.evolution_chain.url);
        if (evolution && evolution.data) {
          const isBaby = evolution.data.chain.species.name;
          const evol1 = evolution.data.chain.evolves_to[0]?.species.name;
          const evol2 = evolution.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;
          const evol3 = evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.name;
          //   console.log('evolution data', evolution.data.chain.evolves_to[0].species.name, evolution.data.chain.evolves_to[0].evolves_to[0].species.name);
          console.log('?????', evol1, evol2, evol3);
          if (isBaby) {
            evolves.push(isBaby);
          }
          if (evol1) {
            evolves.push(evol1);
          }
          if (evol2) {
            evolves.push(evol2);
          }
          if (evol3) {
            evolves.push(evol3);
          }
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
          evolutionChain: evolves
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
        evolutionChain
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
              <div style={{
                backgroundColor: 'azure',
                border: '5px solid #fff',
                borderRadius: '15px'
              }}>
                <div style={{ color: 'black' }}>
                  <h2>{pokemonName}</h2>
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
              </div>
              {moves && moves.length ? <div className='moves-list'>
                <ul>
                  <h3>{moves.length} Moves:</h3> {moves.map(move => <li key={move}>{move}</li>)}
                </ul>
              </div> : null}
            </div>)}
          {!isLoading && evolutionChain && evolutionChain.length ? (<div className='evolve-container'>
            <h3>Evolution Chain:</h3>
            <div className='evolves-container'>
              {evolutionChain.map((form, i) => <div key={Math.random()}>{i === evolutionChain.length - 1 ? form : form + ' -> '}</div>)}
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