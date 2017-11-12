import React from 'react';

const Message = ({ label }) => (
  <p>
    You are in the page: 
    { 
      label ?
        <span> {label}</span> : <span> UNKOWN</span>
    }
  </p>
);

const PageGreeting = (props) => (
  <div>
    <Message {...props} />
    { props.children && <div>{props.children}</div>}
  </div>
);

export default PageGreeting;