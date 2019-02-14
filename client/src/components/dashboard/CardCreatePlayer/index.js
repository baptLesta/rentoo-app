import React, { Component } from 'react';
import css from './styles.scss';
import {} from 'prop-types';
import Card from '../../commun/Card';
import ButtonMain from '../../commun/ButtonMain';

class CardCreatePlayer extends Component {

  state = {
    name: ''
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.state.name)
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className={css.component}>
        <Card title="Add a new player">
          <input onChange={this.handleChange} className="input" placeholder="e.g Baptiste" />
          <ButtonMain
            label='Add Player'
            handleClick={this.handleClick}
          />
        </Card>
      </div>
    );
  }
}

export default CardCreatePlayer
