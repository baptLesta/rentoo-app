import React from 'react';
import css from './styles.scss';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PlayersTableRaw from '../PlayersTableRaw';


const Table = props => {
  const players = props.players;

  return (
    <div className={css.component}>
      <ReactCSSTransitionGroup
        transitionName="page"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}
        transitionAppear
      >
        <table className='table-inner-ctn' key={0}>
          <tbody>
            <tr className='first-line'>
              <th>#</th>
              <th>Name</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Winning %</th>
              <th>Point</th>
            </tr>

            {players.map( (player, i) =>
              <PlayersTableRaw key={i} index={i} {...player}/>
            )}
          </tbody>
        </table>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Table;
