import React from 'react';
import './App.css';
import { Group, Rect, Text } from 'react-konva';
import Konva from 'konva';

class DropTarget extends React.Component {
  state = {
    color: 'gray',
    xPosition: 200,
    yPosition: 200,
    width: 100,
    height: 70
  };

  render() {
    return (
      <Rect
        x={this.state.xPosition}
        y={this.state.yPosition}
        width={this.state.width}
        height={this.state.height}
        fill={this.state.color}
        shadowBlur={5}
      />

    );
  }
}

export default DropTarget;
