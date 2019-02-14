import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';

import ButtonMain from '../../commun/ButtonMain';

class CardCreateGameSetManager extends Component {
  state = {
    sets: []
  }

  constructor(props) {
    super(props);

    this.$inputs = [];
    this.handleAddSet = this.handleAddSet.bind(this);
  }

  handleAddSet() {
    const newSetScore = this.$inputs.map(input => input.value);

    this.setState((prevState) => ({
      sets: [...prevState.sets, newSetScore]
    }));
  }

  reset() {
    this.$inputs.forEach(input => {
      input.value = '';
    })
  }

  render() {
    const MAX_SET_PER_GAME = 5;

    return (
      <div className={css.component}>
        <div className="tight-content">
          {/* {
            this.state.sets.map( (set, index) => (
              <span className="scores-raw" key={index}>
                <span className="score"> {set[0]} </span>
                <span className="score"> {set[1]} </span>
              </span>
            ))
          } */}
        </div>
        {this.state.sets.length <= MAX_SET_PER_GAME &&
          <div>
            <div className="tight-content">
              <div className="row">
                <input className="input" type="number" name="player1"
                  placeholder="e.g 5"
                  ref={el => this.$inputs[0] = el} />
                <span className="separator"></span>
                <input className="input" type="number" name="player2"
                  placeholder="e.g 7"
                  ref={el => this.$inputs[1] = el} />
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
        }
      </div>
    );
  }
}
export default CardCreateGameSetManager;
