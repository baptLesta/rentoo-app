import React, { Component } from 'react';
// import css from './styles.scss';
import {} from 'prop-types';
import Card from '../../commun/Card';
import SelectBox from 'components/commun/SelectBox';
import CardResultsRaw from '../CardResultsRaw';

class CardResults extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    
  }

  render() {
    const players = this.props.players.map( (player) => ({
      value: player.id,
      label: player.name
    }));

    const games = this.props.games;

    return (
      <Card title="Latest Games">
        <div>
          <SelectBox
            placeholder="All players"
            options={players}
            handleChange={this.handleChange}
          />

          {games.map( (game, index) => (
            <CardResultsRaw key={index} game={game} />
          ))}

        </div>
      </Card>
    );
  }
}
export default CardResults
