import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.scss';

const PlayersTableRaw = props => {
  let raw;

  if (props.creationIsPending) {
    raw = <tr className={`${css.component} is-pending`}>
      <td className='column'>{props.index}</td>
      <td className='column'>{props.name}</td>
      <td className='column'></td>
      <td className='column'></td>
      <td className='column'></td>
      <td className='column'></td>
    </tr>
  } else {
    raw = <tr className={css.component}>
      <td className='column'>{props.index}</td>
      <td className='column'>{props.name}</td>
      <td className='column'>{props.win}</td>
      <td className='column'>{props.lost}</td>
      <td className='column'>{props.winPercent}</td>
      <td className='column'>{props.points}</td>
    </tr>
  }

  return raw;
};

PlayersTableRaw.defaultProps = {
  creationIsPending: false
};

export default PlayersTableRaw;
