/* eslint-disable quotes */
/* eslint-disable no-console */
import './items.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualItem from './individualItem';
import UpArrows from '../images/up-arrows.png';

class Items extends Component {
    state = {
      allItems: {}
    }

    componentDidMount() {
      var dataFromDocument = location.hash.replace(/#/, "");
      console.log('data from parent?', dataFromDocument, window.location.origin);
      document.hasStorageAccess().then(
        () => {
          console.log("cookie access granted");
          window.parent.postMessage({type: 'log', message: 'access granted?'}, '*');
        },
        () => {
          console.log("cookie access denied");
          window.parent.postMessage({type: 'log', message: 'access denied'}, '*');
        },
      );
      
      document.requestStorageAccess({ sessionStorage: true, localStorage: true }).then(
        (handle) => {
          let item1 = '';
          let item2 = '';
          console.log("sessionStorage access granted", handle);
          console.log(handle.sessionsStorage.getItem('foo'), 'from parent');
          // handle.localStorage.setItem("foo", "bar");
          item1 = handle.sessionStorage.getItem("item1");
          item2 = handle.localStorage.getItem('item2');
          console.log('items...', item2, item1);
          window.parent.postMessage({type: 'log', message: 'item2 is...' + ' ' + item2}, '*');
          window.parent.postMessage({type: 'log', message: 'item1 is...' + ' ' + item1}, '*');
          window.parent.postMessage({type: 'log', message: 'item3 from parent is ' + handle.localStorage.getItem('item3')}, '*');
        },
        () => {
          console.log("localStorage access denied");
        },
      );
      const {allItems} = this.props;
      if (allItems && allItems.results && allItems.results.length) {
        this.setState({allItems});
      }
    }

    handleFetchNav = async (direction) => {
      const newSet = await this.props.getAnyUrl(direction);
      if (newSet && newSet.results) {
        this.setState({allItems: newSet});
      }
    }
    render() {
      console.log('hello from items component!!');
      const {allItems} = this.state;
      const {selectedItem} = this.props;
      return (
        <div className='items-container'>
          <div className='variety-btn' onClick={this.props.handleDisplayList}>Show all Items</div>
          {this.props.displayed ? <div className='items-modal'>
            <div className='fixed-div'>
              <div className='fixed-items-header'>
                <p className='header-title'>Items</p>
                <div className='x-box' onClick={this.props.handleDisplayList}>x</div>
              </div>
              {selectedItem && selectedItem.name ? (
                <div className='selected-item'>
                  <div className='selected-item-header'>
                    <img style={{width: '60px', marginRight: '1em'}} src={selectedItem.sprites.default} alt={selectedItem.name} />
                    {selectedItem.name.split('-').join(' ')}
                  </div>
                  {selectedItem.attributes && selectedItem.attributes.length ? <div className='item-row'>
Attributes: {selectedItem.attributes.map(i => <span key={i.name}>{i.name}   </span>)}
                  </div> : null}
                  <div className='item-row'>
Cost: {selectedItem.cost}
                  </div>
                  <div className='item-row'>
Category: {selectedItem.category.name}
                  </div>
                  {selectedItem.held_by_pokemon && selectedItem.held_by_pokemon.length ? <div className='item-row pokemon-holders'>
                    {/* Held by Pokémon: {selectedItem.held_by_pokemon.map(j => <span key={j.pokemon.name}>{j.pokemon.name}  </span>)} */}
Held by Pokémon: {selectedItem.held_by_pokemon.map(j => <img 
                      className='held-by-img' 
                      key={j.pokemon.name} 
                      alt={j.pokemon.name} 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${j.pokemon.url.split('/')[j.pokemon.url.split('/').length - 2]}.png`}
                      onClick={() => this.props.handleSearchCall(j.pokemon.name)} />)}
                  </div> : null}
                  {/* {selectedItem.baby_trigger_for ? <div className='item-row'>
Baby Trigger for: {selectedItem.baby_trigger_for}
                  </div> : null} */}
                  {selectedItem.effect_entries && selectedItem.effect_entries.length ? <div className='item-row'>
Description: {selectedItem.effect_entries.find(i => i.language.name === 'en')?.short_effect}
                  </div> : null}
                  <img 
                    className='up-arrows' 
                    src={UpArrows} 
                    alt='close' 
                    onClick={() => this.props.handleSelectItem('')} />
                </div>) : null}
            </div>
            {allItems && allItems.results && allItems.results.length ? 
              allItems.results.map(i => 
                <IndividualItem
                  handleSelectItem={this.props.handleSelectItem}
                  key={Math.random()}
                  item={i} />) : null}
            <div className='nav-box'>
              <p onClick={allItems.previous ? () => this.handleFetchNav(allItems.previous) : null} 
                className={`nav-previous ${allItems.previous ? 'active' : 'disabled'}`}>Previous</p>
              <p onClick={allItems.next ? allItems.next.includes('940&') ? 'disabled' : () => this.handleFetchNav(allItems.next) : null} 
                className={`nav-next ${allItems.next ? allItems.next.includes('940&') ? 'disabled' : 'active' : 'disabled'}`}>Next</p>
            </div>
          </div> : null}
        </div>
      );
    }
}

Items.propTypes = {
  header: PropTypes.string,
  allItems: PropTypes.array,
  getAnyUrl: PropTypes.func,
  handleSelectItem: PropTypes.func,
  selectedItem: PropTypes.object,
  handleDisplayList: PropTypes.func,
  displayed: PropTypes.bool,
  allPokemon: PropTypes.array,
  handleSearchCall: PropTypes.func
};

export default Items;