import React from 'react';
import './App.css';
import { Stage, Layer, Text } from 'react-konva';

import ColoredRect from './colored-rect';
import DropTarget from './drop-target';

class App extends React.Component {

  stageDragStart = (e) => {
    console.log("In StageDragStart...");

  }

  stageDragMove = (e) => {
    console.log("In stageDragMove...");

  }

  stageDragEnd = (e) => {
    console.log("In stageDragEnd...");
    
  }

  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onDragStart={this.stageDragStart}
        onDragMove={this.stageDragMove}
        onDragEnd={this.stageDragEnd}
        >
        <Layer>
          <Text text="Try to click on the rectangle" x={5} y={5} />
          <DropTarget />
          <ColoredRect />
        </Layer>
      </Stage>
    );
  }
}

export default App;
