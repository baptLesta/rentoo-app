import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayers, boundCreatePlayer as createPlayer } from '../../actions';

// Import custom components
import Dashboard from 'components/dashboard/DashBoard';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);

    props.getPlayers();
  }

  render() {
    const {
      players, isLoading, createPlayer
    } = this.props;

    return (
      <Dashboard
        players={players}
        isLoading={isLoading}
        createPlayer={createPlayer}
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
});

export default connect(
  mapStateToProps,
  { getPlayers, createPlayer }
)(DashboardContainer);
