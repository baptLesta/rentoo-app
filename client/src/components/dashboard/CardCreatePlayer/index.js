import React, { Component } from 'react';
// import css from './styles.scss';
import {} from 'prop-types';
import Card from 'components/commun/Card';
import ButtonMain from 'components/commun/ButtonMain';

class CardCreatePlayer extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  constructor(props) {
    super();
  }

  render() {
    return (
      <Card title="Add a new player">
        <input />
        <ButtonMain
          label='Add Player'
        />
      </Card>
    );
  }
}
export default CardCreatePlayer
