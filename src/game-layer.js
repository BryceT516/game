import React from 'react';
import './App.css';
import { Stage, Layer, Text } from 'react-konva';

import gameLayer from './game-layer';
import ColoredRect from './colored-rect';
import DropTarget from './drop-target';

class GameLayer extends React.Component {

  render() {
    return (
      <Layer>
        <Text text="Try to click on the rectangle" x={5} y={5} />
        <DropTarget />
        <ColoredRect />
      </Layer>
    );
  }
}

export default GameLayer;
