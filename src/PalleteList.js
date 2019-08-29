import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const {palettes} = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>REACT COLORS</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette}/>
        ))}
      </div>
    );
  }
}
 
export default PaletteList;