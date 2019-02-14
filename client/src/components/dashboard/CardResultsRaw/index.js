import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';

import IconClose from '../../icon/IconClose';

class CardResultsRaw extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteGame(this.props.game);
  }

  render() {
    const { game } = this.props;

    return (
      <div className={css.component}>
        <span className="final-score">
          <b>{game.player1.name } </b>
          {game.finalScore[0]} - {game.finalScore[1]}
          <b> {game.player2.name}</b>
        </span>
        <div className="sets-ctn">
          {game.sets.map( (set, index) => {
            return (<span key={index} className="set">{set[0]} - {set[1]}</span>)
          })}
        </div>

        <div className="button-ctn">
          <button className="button" onClick={this.handleClick}>
            <i><IconClose /></i>
          </button>
        </div>
      </div>
    );
  }
}
export default CardResultsRaw
