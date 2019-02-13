import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Raw from './Raw';

const fadeIn = keyframes`
  from {
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
  opacity: 0;
  }

  to {
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  opacity: 1;
  }
`;

const TableInnerCtn = styled.table`
  width: 100%;
  border-radius: 4px;
  margin-top: 3em;
  border-spacing: 0px;
  background-color: white;
  &.page-appear {
  animation: ${fadeIn} 0.2s forwards;
  }
`;

const Tr = styled.tr`
`;

const Th = styled.th`
  text-align: left;
  padding: 10px 20px;
`;

const Info = styled.div`
  padding: 8px;
  margin-top: 20px;
  color: rgba(0,0,0,0.5);
  font-weight: 700;
  font-size: 2em;
`;

const Table = props => {
  const {
    data
  } = props;
  console.log(data);
  
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="page"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}
        transitionAppear
      >
        <TableInnerCtn key={0}>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Won</Th>
            <Th>Lost</Th>
            <Th>Winning %</Th>
            <Th>Point</Th>
          </Tr>
          {data.map( (player, i) =>
            <Raw key={i} index={i} {...player}/>
          )}
        </TableInnerCtn>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Table;
