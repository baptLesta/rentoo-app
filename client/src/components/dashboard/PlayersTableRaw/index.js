import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.scss';

const PlayersTableRaw = props => {
  return (
    <tr className={css.component}>
      <td className='column'>{props.index}</td>
      <td className='column'>{props.name}</td>
      <td className='column'>{props.win}</td>
      <td className='column'>{props.lost}</td>
      <td className='column'>{props.winPercent}</td>
      <td className='column'>{props.points}</td>
    </tr>
  );
};

export default PlayersTableRaw;
