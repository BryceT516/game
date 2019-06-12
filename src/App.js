import React from 'react';
import './App.css';
import { Stage, Layer, Text } from 'react-konva';

import GameStage from './game-stage';

class App extends React.Component {

  render() {
    return (
      <GameStage />
    );
  }
}

export default App;
