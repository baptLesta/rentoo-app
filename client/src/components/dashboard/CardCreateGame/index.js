import React, { Component } from 'react';
import css from './styles.scss';
import propTypes from 'prop-types';
import Card from '../../commun/Card';
import ButtonMain from 'components/commun/ButtonMain';
import SelectBox from 'components/commun/SelectBox';
import CardCreateGameSetManager from '../CardCreateGameSetManager';

class CardCreateGame extends Component {
  static propTypes = {
    players: propTypes.array
  }

  static defaultProps = {
    players: []
  }

  state = {
    sets: [],
    player1: null,
    player2: null,
  }

  constructor(props) {
    super();
  }

  render() {
    const players = this.props.players.map( (player) => ({
      value: player.id,
      label: player.name
    }));

    return (
      <div className={css.component}>
        <Card title="Add Games">
          <div className="row">
            <SelectBox
              options={players}
            />
            <span className="separator">VS</span>
            <SelectBox
              options={players}
            />
          </div>
          <h2 className="subtitle">Score (max. of 5)</h2>
          <CardCreateGameSetManager />
          <div className="button-wrapper">
            <ButtonMain
              label="Add Game"
              handleClick={this.handleCreateGame}
            />
          </div>
        </Card>
      </div>
    );
  }
}
export default CardCreateGame
