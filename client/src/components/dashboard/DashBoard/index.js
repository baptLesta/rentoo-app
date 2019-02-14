import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import css from './styles.scss';

// Import custom components
import PlayersTable from '../PlayersTable';
import CardCreateGame from '../CardCreateGame';
import CardCreatePlayer from '../CardCreatePlayer';
import CardResults from '../CardResults';
import Table from '../Table';
import Loader from '../../commun/Loader';
import { create } from 'domain';

const Dashboard = props => {
  const {
    players, isLoading, createPlayer, createGame, games
  } = props;
  let content;

  if (isLoading) {
    content = <Loader />;
  } else {
    content = <Table
      data={players}
    />;
  }

  return (
    <div className={css.component}>
      <h1 className="title">Ping-pong league</h1>
      <PlayersTable players={players} />
      <div className="grid">
        <CardCreatePlayer handleClick={createPlayer}/>
        <CardCreateGame
          players={players}
          createGame={createGame}
        />
        <CardResults
          games={games}
          players={players}
        />
      </div>
      {/* {content} */}
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
