import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';

import ButtonMain from 'components/commun/ButtonMain';

class CardCreateGameSetManager extends Component {
  state = {
    sets: []
  }

  constructor(props) {
    super();

    this.handleAddSet = this.handleAddSet.bind(this);
  }

  handleAddSet() {
    const scorePlayer1 = this.refs.inputPlayer1.value;
    const scorePlayer2 = this.refs.inputPlayer2.value;
    const newSet = [scorePlayer1, scorePlayer2];

    this.setState((prevState) => ({
      sets: [...prevState.sets, newSet]
    }));
  }

  render() {
    return (
      <div className={css.component}>
        <div className="tight-content">
          {
            this.state.sets.map( (set, index) => (
              <span className="scores-raw" key={index}>
                <span className="score"> {set[0]} </span>
                <span className="score"> {set[1]} </span>
              </span>
            ))
          }
          <div className="row">
            <input className="input" type="number" name="player1"
              placeholder="e.g 5"
              ref="inputPlayer1" />
            <span className="separator"></span>
            <input className="input" type="number" name="player2"
              placeholder="e.g 7"
              ref="inputPlayer2" />
          </div>
        </div>
        <div className="button-wrapper">
          <ButtonMain
            isLight
            label="Add Set"
            handleClick={this.handleAddSet}
          />
        </div>
      </div>
    );
  }
}
export default CardCreateGameSetManager
