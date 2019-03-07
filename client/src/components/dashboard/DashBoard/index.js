import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.scss';

// Import custom components
import PlayersTable from '../PlayersTable';
import CardCreateGame from '../CardCreateGame';
import CardCreatePlayer from '../CardCreatePlayer';
import CardResults from '../CardResults';

const Dashboard = props => {
  const {
    players, isLoading, createPlayer, createGame, games, deleteGame, getGamesOfPlayer
  } = props;

  return (
    <div className={css.component}>
      <h1 className="title">Freighthub Ping-pong league</h1>
      <PlayersTable players={players} />
      <div className="grid">
        <CardCreatePlayer handleClick={createPlayer}/>
        <CardCreateGame
          players={players}
          createGame={createGame}
        />
        <CardResults
          getGamesOfPlayer={getGamesOfPlayer}
          games={games}
          deleteGame={deleteGame}
          players={players}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  players: PropTypes.array,
  createPlayers: PropTypes.func,
  createGame: PropTypes.func
};

export default Dashboard;
