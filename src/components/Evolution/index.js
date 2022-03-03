import React, { Component } from 'react';
import './evolution.css';
import PropTypes from 'prop-types';

class Evolution extends Component {
  render() {
    return (
      <div className='level-two'
        style={{
          display: 'flex',
          maxWidth: '5em',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
          maxHeight: '30em',
          transform: 'scale(0.75, 0.75)'
        }}>
        {this.props.evolutionChain.map((form) => form.level === this.props.selectedLevel ? <div onClick={() => this.props.handleSearchCall(form.imageUrl?.split('/')[form.imageUrl.split('/').length - 1].split('.png')[0] || form.name)} 
          className='evolve-item' 
          key={form.name}>
          <div className='images-box'>
            <img className='evolImg' src={form.imageUrl} alt={form.name} />
            {form.evolveItemImg ? <img className='held-item' src={form.evolveItemImg} alt={form.evolveItem} /> : null}
          </div>
          {form.name}

          {form.evolveItem ? <span>with {form.evolveItem}</span> : null}
        </div> : null)}
      </div>
    );
  }
}

Evolution.propTypes = {
  evolutionChain: PropTypes.array,
  handleSearchCall: PropTypes.func,
  selectedLevel: PropTypes.number
};

export default Evolution;