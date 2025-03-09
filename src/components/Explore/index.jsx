/* eslint-disable no-console */
import './explore.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Explore extends Component {
    state = {
      displayed: false
    }

    handleFillInputAndCallSearch = (input) => {
      this.props.populateInput(input);
      this.props.handleSearchCall(input);
    }

    handleDisplayList = () => this.state.displayed ? this.setState({displayed: false}) : this.setState({displayed: true})
    render() {
      const {header, regionSpecies} = this.props;
      return (
        <div className='explore-container'>
          <div className='variety-btn' onClick={this.handleDisplayList}>Show all {header} species</div>
          {this.state.displayed
            ? <div className='explore-species-modal'>
              <div className='fixed-header'>
                <p className='header-title'>{this.props.header} ({regionSpecies.length})</p>
                <div className='x-box' onClick={this.handleDisplayList}>x</div>
              </div>
              {regionSpecies && regionSpecies.length ? regionSpecies.map(i => <p className='species-result' onClick={() => this.handleFillInputAndCallSearch(i.name)} key={i.name}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i?.url?.split('/')[6]}.png`} alt={i.name} />
                {i.name}
              </p>
              ) : null}
            </div>
            : null}
        </div>
      );
    }
}

Explore.propTypes = {
  header: PropTypes.string,
  allPokemon: PropTypes.array,
  regionSpecies: PropTypes.array,
  handleSearchCall: PropTypes.func,
  populateInput: PropTypes.func
};

export default Explore;