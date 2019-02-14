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
    player1: null,
    player2: null,
  }

  constructor(props) {
    super();

    this.handleCreateGame = this.handleCreateGame.bind(this);
  }

  get sets() {
    return this.$setsManager.state.sets;
  }

  factoryHandleSetPlayer(playerNum) {
    return function(playerSelectedId) {
      const playerSelected = this.props.players.filter(player => player._id === playerSelectedId)[0];
      this.setState({
        [`player${playerNum}`]: playerSelected
      });
    }
  }

  handleCreateGame() {
    const gameRecord = {
      ...this.state,
      sets: this.sets
    };

    this.props.createGame(gameRecord);
    this.resetForm();
  }

  resetForm() {
    this.$setsManager.reset();
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
              handleChange={this.factoryHandleSetPlayer(1).bind(this)}
            />
            <span className="separator">VS</span>
            <SelectBox
              options={players}
              handleChange={this.factoryHandleSetPlayer(2).bind(this)}
            />
          </div>
          <h2 className="subtitle">Score (max. of 5)</h2>
          <CardCreateGameSetManager ref={el => this.$setsManager = el}/>
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
