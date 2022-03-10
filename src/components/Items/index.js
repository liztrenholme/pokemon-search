/* eslint-disable no-console */
import './items.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualItem from './individualItem';

class Items extends Component {
    state = {
      displayed: false,
      selectedItem: {},
      allItems: {}
    }

    componentDidMount() {
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

    handleSelectItem = async (itemUrl) => {
      const itemData = await this.props.getAnyUrl(itemUrl);
      if (itemData) {
        this.setState({selectedItem: itemData});
      }
    }

    handleDisplayList = () => this.state.displayed ? this.setState({displayed: false}) : this.setState({displayed: true})
    render() {
      const {allItems, selectedItem} = this.state;
      return (
        <div className='items-container'>
          <div className='variety-btn' onClick={this.handleDisplayList}>Show all Items</div>
          {this.state.displayed ? <div className='items-modal'>
            <div className='fixed-div'>
              <div className='fixed-items-header'>
                <p className='header-title'>Items</p>
                <div className='x-box' onClick={this.handleDisplayList}>x</div>
              </div>
              {selectedItem && selectedItem.name ? (
                <div className='selected-item'>
                  <div className='selected-item-header'>
                    <img style={{width: '80px'}} src={selectedItem.sprites.default} alt={selectedItem.name} />
                    {selectedItem.name.split('-').join(' ')}
                  </div>
                  <div className='item-row'>
Attributes: {selectedItem.attributes.map(i => <span key={i.name}>{i.name}   </span>)}
                  </div>
                  <div className='item-row'>
Category: {selectedItem.category.name}
                  </div>
                  {selectedItem.held_by_pokemon && selectedItem.held_by_pokemon.length ? <div className='item-row'>
Held by Pokémon: {selectedItem.held_by_pokemon.map(j => <span key={j.pokemon.name}>{j.pokemon.name}  </span>)}
                  </div> : null}
                  {selectedItem.baby_trigger_for ? <div className='item-row'>
Baby Trigger for: {selectedItem.baby_trigger_for}
                  </div> : null}
                  <div className='item-row'>
Description: {selectedItem.effect_entries.find(i => i.language.name === 'en').short_effect}
                  </div>
                </div>) : null}
            </div>
            {allItems && allItems.results && allItems.results.length ? 
              allItems.results.map(i => 
                <IndividualItem
                  handleSelectItem={this.handleSelectItem}
                  key={Math.random()}
                  item={i} />) : null}
            <div className='nav-box'>
              <p onClick={allItems.previous ? () => this.handleFetchNav(allItems.previous) : null} 
                className={`nav-previous ${allItems.previous ? 'active' : 'disabled'}`}>Previous</p>
              <p onClick={allItems.next ? () => this.handleFetchNav(allItems.next) : null} 
                className={`nav-next ${allItems.next ? 'active' : 'disabled'}`}>Next</p>
            </div>
          </div> : null}
        </div>
      );
    }
}

Items.propTypes = {
  header: PropTypes.string,
  allItems: PropTypes.array,
  getAnyUrl: PropTypes.func
};

export default Items;