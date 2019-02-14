import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPlayers,
  boundCreatePlayer as createPlayer,
  boundCreateGame as createGame,
  boundDeleteGame as deleteGame,
  getGamesOfPlayer,
  getLatestGames
} from '../../actions';

// Import custom components
import Dashboard from '../../components/dashboard/DashBoard';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);

    props.getPlayers();
    props.getLatestGames();
  }

  render() {
    const {
      players, games, isLoading, createPlayer, createGame, getLatestGames, deleteGame, getGamesOfPlayer
    } = this.props;

    return (
      <Dashboard
        players={players}
        isLoading={isLoading}
        createPlayer={createPlayer}
        createGame={createGame}
        deleteGame={deleteGame}
        getLatestGames={getLatestGames}
        games={games}
        getGamesOfPlayer={getGamesOfPlayer}
      />
    );
  }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
  players: state.player.players,
  isLoading: state.player.isLoading,
  games: state.game.games
});

export default connect(
  mapStateToProps,
  { getPlayers, createPlayer, createGame, getLatestGames, deleteGame, getGamesOfPlayer }
)(DashboardContainer);
