import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import custom components
import Table from './Table';
import Loader from '../commun/Loader';

const Title = styled.h1`
  color: rgba(0,0,0,0.5);
  font-weight: 800;
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const Container = styled.div`
  padding: 3em;
`;

const Dashboard = props => {
  const {
    players, isLoading
  } = props;
  let content;
  console.log(players);

  if (isLoading) {
    content = <Loader />;
  } else {
    content = <Table
      data={players}
    />;
  }

  return (
    <Container>
      <Title>Ping-pong league</Title>
      {content}
    </Container>
  );
};

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  players: PropTypes.array,
};

export default Dashboard;
