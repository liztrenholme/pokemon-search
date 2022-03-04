/* eslint-disable no-console */
import React, { Component } from 'react';
import './main.css';
// import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {
  getPokemonData,
  // getPokemonSpeciesData,
  getRandomPokemon,
  //  getPokemonForms
  getAnyUrl
} from '../../modules';
import Pokeball from '../images/Pokeball.png';
import Evolution from '../Evolution';
import axios from 'axios';

class Main extends Component {
    state = {
      isLoading: false,
      shinyMode: false,
      pokemon: '',
      imgFront: '',
      imgBack: '',
      imgFrontFemale: '',
      imgBackFemale: '',
      imgFrontShiny: '',
      imgBackShiny: '',
      imgFrontShinyFemale: '',
      imgBackShinyFemale: '',
      searchInput: '',
      moves: [],
      types: [],
      evolutionChain: [],
      deName: '',
      jaName: '',
      isBaby: false,
      isMythical: false,
      isLegendary: false,
      generation: '',
      habitat: '',
      growthRate: '',
      shape: '',
      varieties: [],
      allPokemon: [],
      genus: '',
      mainRegion: '',
      description: '',
      pokedexId: ''
    }

    async componentDidMount() {
      const allPokemon = await getAnyUrl('https://pokeapi.co/api/v2/pokemon/?limit=1200');
      if (allPokemon && allPokemon.results) {
        this.setState({allPokemon: allPokemon.results});
      }
    }

    handleUpdateInput = (e) => {
      this.setState({ searchInput: e.target.value });
    }

    handleOnEnter = (e) => {
      if (e.key === 'Enter') {
        this.handleSearchCall();
      }
    }

    toggleShinyMode = () => this.state.shinyMode ? this.setState({shinyMode: false}) : this.setState({shinyMode: true})

    checkPokemonName = (pokemonName) => {
      return this.state.allPokemon.find(i => i.name.includes(pokemonName));
    }
    
    handleSearchCall = async (newPokemon) => {
      if ((newPokemon && typeof newPokemon === 'string') || (newPokemon && typeof newPokemon === 'number') || this.state.searchInput) {
        this.setState({ isLoading: true });
        const pokemon = await getPokemonData((typeof newPokemon === 'string') || (typeof newPokemon === 'number') ? newPokemon : this.state.searchInput);
        let evolves = [];
        let deName = '';
        let jaName = '';
        let isBaby = false;
        let isMythical = false;
        let isLegendary = false;
        let generation = '';
        let habitat = '';
        let growthRate = '';
        let shape = '';
        let genus = '';
        const varietiesList = [];
        let mainRegion = '';
        let description = '';
        if (pokemon && pokemon.name) {
        // const pokemonId = pokemon.id;
          const speciesData = await getAnyUrl(pokemon.species.url); // getPokemonSpeciesData(pokemon.species.url || pokemonId);
          isBaby = speciesData.is_baby;
          isMythical = speciesData.is_mythical;
          isLegendary = speciesData.is_legendary;
          generation = speciesData.generation?.name;
          const mainRegionData = await getAnyUrl(speciesData.generation?.url);
          mainRegion = mainRegionData?.main_region?.name;
          habitat = speciesData.habitat;
          growthRate = speciesData.growth_rate?.name;
          shape = speciesData.shape?.name;

          speciesData.genera?.find(i => i.language.name === 'en').genus;
          description = speciesData.flavor_text_entries?.find(i => i.language.name === 'en').flavor_text;
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
            evolution.data.chain.evolves_to.forEach(i => manyEvols.push(
              {
                level: 2, 
                name: i.species.name, 
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.species.url.split('/')[i.species.url.split('/').length - 2]}.png`,
                evolveItem: i.evolution_details[0].held_item?.name.split('-').join(' '),
                evolveItemUrl: i.evolution_details[0].held_item?.url
              }
            ));
            // level 3
            evolution.data.chain.evolves_to[0]?.evolves_to.forEach(i => manyEvols.push(
              {
                level: 3, 
                name: i.species.name, 
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.species.url.split('/')[i.species.url.split('/').length - 2]}.png`,
                evolveItem: i.evolution_details[0].held_item?.name,
                evolveItemUrl: i.evolution_details[0].held_item?.url
              }
            ));
            evolution.data.chain.evolves_to[1]?.evolves_to.forEach(i => manyEvols.push(
              {
                level: 3, 
                name: i.species.name, 
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.species.url.split('/')[i.species.url.split('/').length - 2]}.png`,
                evolveItem: i.evolution_details[0].held_item?.name.split('-').join(' '),
                evolveItemUrl: i.evolution_details[0].held_item?.url
              }
            ));
            // level 1
            if (firstLevel) {
              evolves.push({
                level: 1, 
                name: firstLevel, 
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.species.url.split('/')[evolution.data.chain.species.url.split('/').length - 2]}.png`,
              });
            }
            // level 4 (probably will never be used)
            if (evol3) {
              evolves.push({
                level: 4, 
                name: evol3, 
                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url.split('/')[evolution.data.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url.split('/').length - 2]}.png`});
            }
            // put them all together
            evolves = [...evolves, ...manyEvols];
            // get any evolve item images and data
            evolves.forEach(async i => { 
              let itemData = '';
              if (i.evolveItemUrl) {
                itemData = await getAnyUrl(i.evolveItemUrl);
                console.log(itemData);
                i.evolveItemImg = itemData.sprites.default;
                this.setState({evolutionChain: evolves});
              }
            });

            // German name
            deName = speciesData.names.find(i => i.language.name === 'de').name;
            jaName = speciesData.names.find(i => i.language.name === 'ja').name;
            genus = speciesData.genera?.find(i => i.language.name === 'en').genus;
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
            imgFrontFemale: pokemon.sprites.front_female,
            imgBackFemale: pokemon.sprites.back_female,
            imgFrontShinyFemale: pokemon.sprites.front_shiny_female,
            imgBackShinyFemale: pokemon.sprites.back_shiny_female,
            moves,
            types,
            evolutionChain: evolves,
            searchInput: pokemon.name,
            deName,
            jaName,
            isBaby,
            isMythical,
            isLegendary,
            generation,
            habitat,
            growthRate,
            shape,
            varieties: varietiesList,
            genus,
            mainRegion,
            description,
            pokedexId: speciesData.pokedex_numbers[0]?.entry_number
          });
        } else if (pokemon && pokemon.includes('404')) {
          const foundAlternativeName = this.checkPokemonName(this.state.searchInput.toLowerCase().trim());
          if (foundAlternativeName) {
            this.handleSearchCall(foundAlternativeName.name);
          } else {
            this.setState({
              pokemon: 'Try your search again, because this pokemon does not exist!',
              isLoading: false,
              shinyMode: false,
              imgFront: '',
              imgBack: '',
              imgFrontFemale: '',
              imgBackFemale: '',
              imgFrontShiny: '',
              imgBackShiny: '',
              imgFrontShinyFemale: '',
              imgBackShinyFemale: '',
              searchInput: '',
              moves: [],
              types: [],
              evolutionChain: [],
              isBaby: false,
              isMythical: false,
              isLegendary: false,
              deName: '',
              jaName: '',
              generation: '',
              habitat: '',
              growthRate: '',
              shape: '',
              varieties: [],
              genus: '',
              mainRegion: '',
              description: '',
              pokedexId: ''
            });
          }
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
        this.handleSearchCall(randomPokemonData.id);
      }
    }

    clearInput = () => this.setState({searchInput: ''})

    render() {
      const {
        pokemon, 
        moves,
        imgFront,
        imgBack,
        imgFrontShiny,
        imgBackShiny,
        imgFrontFemale,
        imgBackFemale,
        imgFrontShinyFemale,
        imgBackShinyFemale,
        shinyMode,
        isLoading,
        types,
        searchInput,
        evolutionChain,
        deName,
        jaName,
        isBaby,
        isMythical,
        isLegendary,
        generation,
        habitat,
        growthRate,
        shape,
        varieties,
        genus,
        mainRegion,
        description,
        pokedexId
      } = this.state;
      const pokemonName = pokemon && pokemon.length ? pokemon[0].toUpperCase() + pokemon.slice(1, pokemon.length + 1).toLowerCase() : null;
      const lastLetters = generation ? generation.split('-')[1] : '';
      const temp = generation?.split('-')[0];
      const gen = temp ? temp[0].toUpperCase() + temp.slice(1, temp.length + 1).toLowerCase() + ' ' + lastLetters.toUpperCase() : null;
      const habitatDisplayed = habitat && habitat !== null && typeof habitat === 'string' ? habitat.split('-').join(' ') : habitat ? habitat.name || '' : '';
      const growthRateDisplayed = growthRate ? growthRate.split('-').join(' ') : '';
      const shapeDisplayed = shape ? shape.split('-').join(' ') : '';
      const formatLev1 = description.split('\f').join(' ').split('POKéMON').join('Pokémon').split(',').join(', ');
      const formatLev2 = formatLev1.split('\n').join(' ').split('.').join('. ').split(pokemon.toUpperCase())?.join(pokemonName);
      return (
        <div className='display'>
          <div>
            <h1>Search any Pokémon!</h1>
          </div>
          <div className='search-container'>
            <input 
              className='search-input' 
              onKeyDown={this.handleOnEnter} 
              onChange={this.handleUpdateInput} 
              value={searchInput}
              placeholder='Name or Pokédex ID...' />
            <div className='clear' onClick={this.clearInput}>x</div>
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
                      {jaName ? <em>Japanese: {jaName}</em> : null}
                      {deName ? <em>German: {deName}</em> : null}
                    </div>
                    {types.length ? <span><ul className='types-list'>
                      <h3>Type(s):</h3> {types.map(type => <li key={type}>{type}</li>)}
                    </ul></span> : null}
                  </div>
                  {imgFrontShiny || imgBackShiny ? (
                    <div 
                      onClick={this.toggleShinyMode} 
                      className={shinyMode ? 'shiny-button' : 'normal-button'}>
                      Shiny Mode {shinyMode ? 'On' : 'Off'}
                    </div>) : null}
                  {shinyMode ? (<div className='picture-box'>
                    {imgBackShinyFemale || imgFrontShinyFemale ? 'Male:' : null}
                    <div className='picture-group'>
                      {imgFrontShiny ?
                        <img className='pokemon-front' src={imgFrontShiny} alt={pokemon} />
                        : null}
                      {imgBackShiny ?
                        <img className='pokemon-front' src={imgBackShiny} alt={pokemon} />
                        : null}
                    </div>
                    {imgBackShinyFemale || imgFrontShinyFemale ? 'Female:' : null}
                    <div className='picture-group'>
                      {imgFrontShinyFemale ?
                        <img className='pokemon-front' src={imgFrontShinyFemale} alt={pokemon} />
                        : null}
                      {imgBackShinyFemale ?
                        <img className='pokemon-front' src={imgBackShinyFemale} alt={pokemon} />
                        : null}
                    </div>
                  </div>) : (<div className='picture-box'>
                    {imgBackFemale || imgFrontFemale ? 'Male:' : null}
                    <div className='picture-group'>
                      {imgFront ?
                        <img className='pokemon-front' src={imgFront} alt={pokemon} />
                        : null}
                      {imgBack ?
                        <img className='pokemon-front' src={imgBack} alt={pokemon} />
                        : null}
                    </div>
                    {imgBackFemale || imgFrontFemale ? 'Female:' : null}
                    <div className='picture-group'>
                      {imgFrontFemale ?
                        <img className='pokemon-front' src={imgFrontFemale} alt={pokemon} />
                        : null}
                      {imgBackFemale ?
                        <img className='pokemon-front' src={imgBackFemale} alt={pokemon} />
                        : null}
                    </div>
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
              {mainRegion ? <p>Main Region: {mainRegion}</p> : null}
              {habitatDisplayed ? <p>Habitat: {habitatDisplayed}</p> : null}
              {growthRateDisplayed ? <p>Growth Rate: {growthRateDisplayed}</p> : null}
              {shapeDisplayed ? <p>Shape: {shapeDisplayed}</p> : null}
              {genus ? <p>Genus: {genus}</p> : null}
              {pokedexId && pokedexId < 899 ? <p>Pokédex ID: {pokedexId}</p> : null}
              {description ? <div className='divider' /> : null}
              {description ? <p>{formatLev2}</p> : null}
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
                  <Evolution
                    evolutionChain={evolutionChain}
                    handleSearchCall={this.handleSearchCall}
                    selectedLevel={1} />
                  : null}

                {evolutionChain.find(i => i.level === 2) ? <div className='arrow'>{' > '}</div> : null}
                
                {evolutionChain.find(i => i.level === 2) ?
                  <Evolution
                    evolutionChain={evolutionChain}
                    handleSearchCall={this.handleSearchCall}
                    selectedLevel={2} />
                  : null}

                {evolutionChain.find(i => i.level === 3) ? <div className='arrow'>{' > '}</div> : null}

                {evolutionChain.find(i => i.level === 3) ?
                  <Evolution
                    evolutionChain={evolutionChain}
                    handleSearchCall={this.handleSearchCall}
                    selectedLevel={3} />
                  : null}

                {/* {evolutionChain.find(i => i.level === 4) ? <div className='arrow'>{' > '}</div> : null}

                {evolutionChain.find(i => i.level === 4) ?
                  <Evolution
                    evolutionChain={evolutionChain}
                    handleSearchCall={this.handleSearchCall}
                    selectedLevel={4} />
                  : null} */}
              </div>
            </div>) : null}
        </div>
      );
    }
}

Main.propTypes = {
  // color: PropTypes.string
};

export default Main;