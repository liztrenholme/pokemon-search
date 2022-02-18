/* eslint-disable no-console */
import React, { Component } from 'react';
import './main.css';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {
  getPokemonData,
  // getPokemonSpeciesData,
  getRandomPokemon,
  //  getPokemonForms
  getAnyUrl
} from '../../modules';
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
      deName: '',
      isBaby: false,
      isMythical: false,
      isLegendary: false,
      generation: '',
      habitat: '',
      growthRate: '',
      shape: '',
      varieties: []
    }
    // async componentDidMount() {
    //   const eevee = await this.handleSearchCall('eevee');
    //   console.log(eevee);
    // }

    handleUpdateInput = (e) => {
      this.setState({ searchInput: e.target.value });
    }

    handleOnEnter = (e) => {
      if (e.key === 'Enter') {
        this.handleSearchCall();
      }
    }

    toggleShinyMode = () => this.state.shinyMode ? this.setState({shinyMode: false}) : this.setState({shinyMode: true})

    handleSearchCall = async (newPokemon) => {
      if ((newPokemon && typeof newPokemon === 'string') || this.state.searchInput) {
        this.setState({ isLoading: true });
        const pokemon = await getPokemonData(typeof newPokemon === 'string' ? newPokemon : this.state.searchInput);
        let evolves = [];
        let deName = '';
        let isBaby = false;
        let isMythical = false;
        let isLegendary = false;
        let generation = '';
        let habitat = '';
        let growthRate = '';
        let shape = '';
        const varietiesList = [];
        if (pokemon && pokemon.name) {
        // const pokemonId = pokemon.id;
          const speciesData = await getAnyUrl(pokemon.species.url); // getPokemonSpeciesData(pokemon.species.url || pokemonId);
          isBaby = speciesData.is_baby;
          isMythical = speciesData.is_mythical;
          isLegendary = speciesData.is_legendary;
          generation = speciesData.generation?.name;
          habitat = speciesData.habitat;
          growthRate = speciesData.growth_rate?.name;
          shape = speciesData.shape?.name;
          const varieties = speciesData.varieties;
        
          if (varieties && varieties.length) {
            varieties.forEach(form => !form.pokemon?.name.includes('starter') && !form.pokemon?.name.includes('world-cap') 
              ? varietiesList.push({name: form.pokemon?.name, url: form.pokemon?.url}) : null);
          }
          let evolution = null;
          if (speciesData && speciesData.evolution_chain) {      
            evolution = await axios.get(speciesData.evolution_chain.url);
          }
          if (evolution && evolution.data) {
            const firstLevel = evolution.data.chain.species.name;
            const evol3 = evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.name;

            const manyEvols = [];
            // level 2
            evolution.data.chain.evolves_to.forEach(i => manyEvols.push({level: 2, name: i.species.name, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.species.url.split('/')[i.species.url.split('/').length - 2]}.png`}));
            // level 3
            evolution.data.chain.evolves_to[0]?.evolves_to.forEach(i => manyEvols.push({level: 3, name: i.species.name, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.species.url.split('/')[i.species.url.split('/').length - 2]}.png`}));
            evolution.data.chain.evolves_to[1]?.evolves_to.forEach(i => manyEvols.push({level: 3, name: i.species.name, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.species.url.split('/')[i.species.url.split('/').length - 2]}.png`}));
            // level 1
            if (firstLevel) {
              evolves.push({level: 1, name: firstLevel, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.species.url.split('/')[evolution.data.chain.species.url.split('/').length - 2]}.png`});
            }
            // put them all together
            evolves = [...evolves, ...manyEvols];
            // level 4 (probably will never be used)
            if (evol3) {
              evolves.push({level: 4, name: evol3, imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url.split('/')[evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url.split('/').length - 2]}.png`});
            }
            // German name
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
            deName,
            isBaby,
            isMythical,
            isLegendary,
            generation,
            habitat,
            growthRate,
            shape,
            varieties: varietiesList
          });
        } else if (pokemon && pokemon.includes('404')) {
          this.setState({
            pokemon: 'Try your search again, because this pokemon does not exist!',
            isLoading: false,
            shinyMode: false,
            imgFront: '',
            imgBack: '',
            imgFrontShiny: '',
            imgBackShiny: '',
            searchInput: '',
            moves: [],
            types: [],
            evolutionChain: [],
            isBaby: false,
            isMythical: false,
            isLegendary: false,
            deName: '',
            generation: '',
            habitat: '',
            growthRate: '',
            shape: '',
            varieties: []
          });
        }
      }
    }

    handleRandomPokemon = async () => {
      let randomPokemonData = await getRandomPokemon();
      if (randomPokemonData && typeof randomPokemonData === 'string' && randomPokemonData.includes('Error')) {
        this.handleRandomPokemon();
      }
      this.setState({ isLoading: true });
      if (randomPokemonData && randomPokemonData.name) {
        this.handleSearchCall(randomPokemonData.name);
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
        deName,
        isBaby,
        isMythical,
        isLegendary,
        generation,
        habitat,
        growthRate,
        shape,
        varieties
      } = this.state;
      const pokemonName = pokemon && pokemon.length ? pokemon[0].toUpperCase() + pokemon.slice(1, pokemon.length + 1).toLowerCase() : null;
      const lastLetters = generation ? generation.split('-')[1] : '';
      const temp = generation?.split('-')[0];
      const gen = temp ? temp[0].toUpperCase() + temp.slice(1, temp.length + 1).toLowerCase() + ' ' + lastLetters.toUpperCase() : null;
      const habitatDisplayed = habitat && habitat !== null && typeof habitat === 'string' ? habitat.split('-').join(' ') : habitat ? habitat.name || '' : '';
      const growthRateDisplayed = growthRate ? growthRate.split('-').join(' ') : '';
      const shapeDisplayed = shape ? shape.split('-').join(' ') : '';
      return (
        <div className='display'>
          <div>
            <h1>Search any Pokemon!</h1>
          </div>
          <div className='search-container'>
            <input className='search-input' onKeyDown={this.handleOnEnter} onChange={this.handleUpdateInput} value={searchInput} />
            <div className='search-button' onClick={this.handleSearchCall}>Search!</div>
          </div>
          <div className='search-button' onClick={this.handleRandomPokemon}>Random!</div>
          {isLoading ? (
            <div>
              <img className='loading' src={Pokeball} alt='loading'/>
            </div>) :
            (<div className='results-container'>
              {pokemon ? (
                <div style={{
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
                  {imgFrontShiny || imgBackShiny ? (
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
                  <div style={{color: 'black', marginTop: 'auto'}}>
                    {isBaby ? 'This pokemon is a baby!' : null}
                    {isMythical ? 'This pokemon is mythical.' : null}
                    {isLegendary ? 'This pokemon is legendary.' : null}
                  </div>
                </div>) : null}
              {moves && moves.length ? <div className='moves-list'>
                <ul>
                  <h3>{moves.length} Moves:</h3> {moves.map(move => <li key={move}>{move}</li>)}
                </ul>
              </div> : null}
            </div>)}
          {!isLoading && pokemon && (habitatDisplayed || growthRateDisplayed || shapeDisplayed) ? 
            <div className='data-rows'>
              <strong>{gen}</strong>
              {habitatDisplayed ? <p>Habitat: {habitatDisplayed}</p> : null}
              {growthRateDisplayed ? <p>Growth Rate: {growthRateDisplayed}</p> : null}
              {shapeDisplayed ? <p>Shape: {shapeDisplayed}</p> : null}
              {varieties && varieties.length - 1 ? <div className='varieties-box'>
                <strong>Varieties</strong><div />{varieties.map(variety => (
                  variety.name !== pokemon ?
                    <div key={variety.name} className='variety-btn' onClick={() => this.handleSearchCall(variety.name)}>{variety.name}</div> : null
                ))} </div> : null}
            </div>
            : null}
          {!isLoading && evolutionChain && evolutionChain.length ? (
            <div className='evolve-container'>
              <h3>Evolution Chain:</h3>
              <div className='evolves-list'>

                {evolutionChain.find(i => i.level === 1) ?
                  <div className='level-one'
                    style={{
                      display: 'flex',
                      maxWidth: '10em',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      transform: 'scale(0.75, 0.75)'
                    }}>
                    {evolutionChain.map((form) => form.level === 1 ? <div onClick={() => this.handleSearchCall(form.name)} 
                      className='evolve-item' 
                      key={form.name}>
                      <img className='evolImg' src={form.imageUrl} alt={form.name} />
                      {form.name}
                    </div> : null)}
                  </div> : null}

                {evolutionChain.find(i => i.level === 2) ? <div className='arrow'>{' -> '}</div> : null}
                
                {evolutionChain.find(i => i.level === 2) ?
                  <div className='level-two'
                    style={{
                      display: 'flex',
                      maxWidth: '10em',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      maxHeight: '30em',
                      transform: 'scale(0.75, 0.75)'
                    }}>
                    {evolutionChain.map((form) => form.level === 2 ? <div onClick={() => this.handleSearchCall(form.name)} 
                      className='evolve-item' 
                      key={form.name}>
                      <img className='evolImg' src={form.imageUrl} alt={form.name} />
                      {form.name}
                    </div> : null)}
                  </div> : null}

                {evolutionChain.find(i => i.level === 3) ? <div className='arrow'>{' -> '}</div> : null}

                {evolutionChain.find(i => i.level === 3) ?
                  <div className='level-three'
                    style={{
                      display: 'flex',
                      maxWidth: '10em',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      transform: 'scale(0.75, 0.75)'
                    }}>
                    {evolutionChain.map((form) => form.level === 3 ? <div onClick={() => this.handleSearchCall(form.name)} 
                      className='evolve-item' 
                      key={form.name}>
                      <img className='evolImg' src={form.imageUrl} alt={form.name} />
                      {form.name}
                    </div> : null)}
                  </div> : null}

                {evolutionChain.find(i => i.level === 4) ? <div className='arrow'>{' -> '}</div> : null}

                {evolutionChain.find(i => i.level === 4) ?
                  <div className='level-four'
                    style={{
                      display: 'flex',
                      maxWidth: '10em',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      transform: 'scale(0.75, 0.75)'
                    }}>
                    {evolutionChain.map((form) => form.level === 4 ? <div onClick={() => this.handleSearchCall(form.name)} 
                      className='evolve-item' 
                      key={form.name}>
                      <img className='evolImg' src={form.imageUrl} alt={form.name} />
                      {form.name}
                    </div> : null)}
                  </div> : null}
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