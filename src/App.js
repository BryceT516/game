import React from 'react';
import './App.css';
import { Stage, Layer, Text } from 'react-konva';

import ColoredRect from './colored-rect';

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to click on the rectangle" x={5} y={5} />
        <ColoredRect />
      </Layer>
    </Stage>
  );
}

export default App;
