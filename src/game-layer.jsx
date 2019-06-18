import React from 'react';
import './App.css';
import { Layer, Text, Rect } from 'react-konva';

import ColoredRect from './colored-rect';
import DropTarget from './drop-target';

class GameLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  build_rects = () => {
    console.log("In build_rects...");
    
    return(
    this.props.rects.map(function(object, i){
      <Rect
        x={10}
        y={10}
        width={50}
        height={50}
        fill='green'
        shadowBlur={5}
      />
    })
    )
  }
  
  render() {
    return (
      <Layer>
        <Text text="Try to click on the rectangle. That is an order!" x={5} y={5} />
        <DropTarget />
        {this.build_rects()}
      </Layer>
    );
  }
}

export default GameLayer;
