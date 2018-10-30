// eslint-disable-next-line
import React from 'react';

import styled from 'react-emotion';
import classNames from 'classnames';

const BaseComponent = ({
  className = '',
  children, 
  ...otherProps
}) => (
    <h1 
    className={classNames(
     'enhanced-title2',
      className
    )}
    {...otherProps}>{children}</h1>
);

const EnhancedTitle2 = styled(BaseComponent)`
  color: ${ props => props.theme.titleColor };
  font-size: ${
    props => {
      const { fontSize = 20, fontUnit = 'px' } = props;
      return `${fontSize}${fontUnit}`;
    }
  };
  
  &:hover {
    color: ${ props => props.theme.titleHoverColor };
  }
`;

export default EnhancedTitle2;