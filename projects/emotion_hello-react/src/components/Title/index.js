// eslint-disable-next-line
import React from 'react';

import styled from 'react-emotion';

const Title = styled('h1')`
  label: title;

  color: red;
  font-size: 20px;

  &:hover {
    color: green;
  }
`;

export default Title;