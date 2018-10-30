// eslint-disable-next-line
import React from 'react';

import { css, cx } from 'react-emotion';
import classNames from 'classnames';

const baseStyles = css`
  color: red;
  
  &:hover {
    color: green;
  }
`;

const buildDynamicStyles = props => {
  const {
    fontSize = 20,
    fontUnit = 'px',
  } = props;
  return css`font-size: ${fontSize}${fontUnit};`;
};

const EnhancedTitle = ({
  className = '',
  children, 
  ...otherProps
}) => (
  <h1 
    className={classNames(
     'enhanced-title',
      cx(baseStyles, buildDynamicStyles(otherProps)),
      className
    )}
    {...otherProps}>{children}</h1>
);

export default EnhancedTitle;