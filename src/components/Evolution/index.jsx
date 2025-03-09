import './evolution.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Evolution extends Component {
  render() {
    return (
      <div className='level-two'
        style={{
          display: 'flex',
          maxWidth: '6em',
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
            {form.evolveItemImg ? <img className='held-item' src={form.evolveItemImg} alt={form.evolveItem} /> : null}
            <img className='evolImg' src={form.imageUrl} alt={form.name} />
          </div>
          {form.evolveItem ? <span>+ {form.evolveItem}</span> : null}
          {form.name}

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