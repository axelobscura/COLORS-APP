import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import {Link} from 'react-router-dom';

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
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}
 
export default PaletteList;