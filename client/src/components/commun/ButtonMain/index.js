import React, { Component } from 'react';
import css from './styles.scss';
import propTypes from 'prop-types';
import classNames from 'classnames';


class ButtonMain extends Component {
  static propTypes = {
    label: propTypes.string.isRequired,
    handleClick: propTypes.func,
    isLight: propTypes.bool,
    isWidthFull: propTypes.bool
  }

  static defaultProps = {
    isLight: false,
    isWidthFull: true
  }

  constructor(props) {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    let classes = classNames({
      button: true,
      'is-width-full': this.props.isWidthFull,
      'is-light': this.props.isLight
    });

    return (
      <div className={css.component}>
        <button className={classes} onClick={this.handleClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}
export default ButtonMain
