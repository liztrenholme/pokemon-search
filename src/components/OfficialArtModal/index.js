/* eslint-disable no-console */
import './officialArt.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OfficialArtModal extends Component {
    state = {
      displayed: false
    }

    handleDisplayArt = () => this.state.displayed ? this.setState({displayed: false}) : this.setState({displayed: true})
    render() {
      const {pokemonName, officialArtImg} = this.props;
      return (
        <div className='art-container'>
          <div className='variety-btn' onClick={this.handleDisplayArt}>Official Artwork</div>
          {this.state.displayed
            ? <div className='x-box' onClick={this.handleDisplayArt}>x</div> : null}
          {this.state.displayed
            ? <div className='art-modal'>
              <div className='fixed-header'>
                <p className='header-title'>{pokemonName}</p>
                <div className='x-box' onClick={this.handleDisplayArt}>x</div>
              </div>
              <img className='art-image' src={officialArtImg} alt={pokemonName} />
            </div>
            : null}
        </div>
      );
    }
}

OfficialArtModal.propTypes = {
  officialArtImg: PropTypes.string,
  pokemonName: PropTypes.string,
};

export default OfficialArtModal;