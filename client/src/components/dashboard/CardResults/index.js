import React from 'react';
import Card from '../../commun/Card';
import SelectBox from '../../commun/SelectBox';
import CardResultsRaw from '../CardResultsRaw';

class CardResults extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.getGamesOfPlayer(value);
  }

  render() {
    const players = this.props.players.map( (player) => ({
      value: player.id,
      label: player.name
    }));

    const { games, deleteGame } = this.props;

    return (
      <Card title="Latest Games">
        <div>
          <SelectBox
            placeholder="All players"
            options={players}
            handleChange={this.handleChange}
          />

          {games.map( (game, index) => (
            <CardResultsRaw key={index} game={game} deleteGame={deleteGame}/>
          ))}

        </div>
      </Card>
    );
  }
}
export default CardResults;
