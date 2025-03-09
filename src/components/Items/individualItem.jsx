/* eslint-disable no-console */
import './items.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IndividualItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className='item' onClick={() => this.props.handleSelectItem(item.url)}>
        <img
          style={{marginRight: '1em'}}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name.includes('tm') ? 'tm-normal' : item.name}.png`}
          alt={item.name} />
        {item.name.split('-').join(' ')}
      </div>
    );
  }
}

IndividualItem.propTypes = {
  item: PropTypes.object,
  handleSelectItem: PropTypes.func
};

export default IndividualItem;