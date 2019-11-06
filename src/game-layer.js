import React from 'react';
import './App.css';
import { Layer, Text } from 'react-konva';

import ColoredRect from './colored-rect';
import DropTarget from './drop-target';

class GameLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Layer>
        <Text text="Try to click on the rectangle. That is an order!" x={5} y={5} />
        <DropTarget />
        {this.props.rects.map(item => <ColoredRect key={item.id} id={item.id} name={item.name}/>)}
      </Layer>
    );
  }
}

export default GameLayer;
