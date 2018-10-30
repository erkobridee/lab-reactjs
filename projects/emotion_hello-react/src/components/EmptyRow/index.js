// eslint-disable-next-line
import React from 'react';

import styled from 'react-emotion';

const EmptyRow = styled('div')`
  label: empty-row;

  width: 100%;
  height: ${props => props.height ? props.height : '20px'};
`;

export default EmptyRow;