import React from 'react';
import './App.css';
import { Stage } from 'react-konva';

import GameLayer from './game-layer';

class GameStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_layer_rects: [ {id: 1, name: 'rect1'}, { id: 2, name: 'rect2' } ]
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
        <GameLayer rects={this.state.game_layer_rects}/>
      </Stage>
    );
  }
}

export default GameStage;
