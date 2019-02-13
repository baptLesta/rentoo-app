import React from 'react';
import css from './styles.scss';
import propTypes from 'prop-types';

const Card = props => {
  return (
    <div className={css.component}>
      <h2 className="title">{props.title}</h2>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  title: propTypes.string.isRequired
};

export default Card;
