import React from 'react';
import './App.css';
import { Group, Rect, Text } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  state = {
    color: 'green',
    xPosition: 20,
    yPosition: 20,
    width: 70,
    height: 50,
    isDragging: false
  };

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };

  onDragStart = (e) => {
    console.log("In onDragStart...");
    this.setState({
      isDragging: true
    })
  }

  onDragMove = (e) => {
    console.log("In onDragMove...");
    this.setState({
      xPosition: e.target.x(),
      yPosition: e.target.y()
    })
  }

  onDragEnd = (e) => {
    console.log("In onDragEnd...");
    this.setState({
      xPosition: e.target.x(),
      yPosition: e.target.y(),
      isDragging: false
    })
  }

  isDraggingAlert = () => {
    if (this.state.isDragging) {
      return ("Dragging!");
    } else {
      return ("");
    }
  }

  render() {
    return (
      <Group
        x={this.state.xPosition}
        y={this.state.yPosition}
        draggable
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragMove={this.onDragMove}
      >
        <Rect
          x={0}
          y={0}
          width={this.state.width}
          height={this.state.height}
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
        />
        <Text
          text={this.state.xPosition  + ', ' + this.state.yPosition}
          x={0}
          y={0}
          width={this.state.width}
          height={this.state.height}
          align='center'
          verticalAlign='middle'
        />
        <Text
          text={this.isDraggingAlert()}
          x={0}
          y={0}
          width={this.state.width}
          height={this.state.height}
          align='center'
          verticalAlign='bottom'
        />
      </Group>
    );
  }
}

export default ColoredRect;
