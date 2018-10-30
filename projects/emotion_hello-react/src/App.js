/*
  sample:
  https://codesandbox.io/s/pk1qjqpw67

  site:
  https://emotion.sh/
*/

import React, { Component } from 'react';

import classNames from 'classnames';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import EmptyRow from './components/EmptyRow';
import Title from './components/Title';
import EnhancedTitle from './components/EnhancedTitle';
import EnhancedTitle2 from './components/EnhancedTitle2';

import logo from './logo.svg';
import './App.css';

//------------------------------------------------------------------------------

const AppHeader = ({ className }) => (
  <header className={classNames('App-header', className)}>
    <img src={logo} className="App-logo" alt="logo" />
    <EmptyRow />
    <a className="App-link" href="https://reactjs.org/">React</a>
    <EmptyRow />
  </header>
);

const StyledAppHeader = styled(AppHeader)`
  label: styled-app-header-wrapper;

  background-color: green;

  .App-link {
    color: blue;

    &:hover {
      color: yellow;
    }
  }
`;

//------------------------------------------------------------------------------

const BasicDiv = styled('div')`
  color: blue;
  background-color: lightYellow;

  &:hover {
    color: darkBlue;
    background-color: lightGray;
  }
`;

const ModifiedDiv = styled(BasicDiv)`
  background-color: lightCoral;
`;

//------------------------------------------------------------------------------

const theme = {
  titleColor: 'blue',
  titleHoverColor: 'green'
};

//------------------------------------------------------------------------------

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <StyledAppHeader className={'erko-header'} />
          <div className="App-content">
            <EmptyRow />
            <Title>Hello World</Title>
            <EmptyRow />
            <EnhancedTitle className="erko-title" fontSize={30}>Enhanced Title here!</EnhancedTitle>
            <EnhancedTitle2 fontSize={21}>Enhanced Title 2 here!</EnhancedTitle2>
            <hr/>
            <EmptyRow height="10px" />
            <BasicDiv>Basic</BasicDiv>
            <EmptyRow height="5px"/>
            <ModifiedDiv>Modified</ModifiedDiv>
            <EmptyRow />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
