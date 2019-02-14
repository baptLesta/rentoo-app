import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPlayers,
  boundCreatePlayer as createPlayer,
  boundCreateGame as createGame,
  getLatestGames
} from '../../actions';

// Import custom components
import Dashboard from 'components/dashboard/DashBoard';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);

    props.getPlayers();
    props.getLatestGames();
  }

  render() {
    const {
      players, games, isLoading, createPlayer, createGame, getLatestGames
    } = this.props;

    return (
      <Dashboard
        players={players}
        isLoading={isLoading}
        createPlayer={createPlayer}
        createGame={createGame}
        getLatestGames={getLatestGames}
        games={games}
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
  { getPlayers, createPlayer, createGame, getLatestGames }
)(DashboardContainer);
