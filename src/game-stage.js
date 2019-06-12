import React from 'react';
import './App.css';
import { Stage } from 'react-konva';

import GameLayer from './game-layer';

class GameStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  stageDragStart = (e) => {
    console.log("Stage Drag Start...");
  }

  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onDragStart={this.stageDragStart}
        >
        <GameLayer />
      </Stage>
    );
  }
}

export default GameStage;
