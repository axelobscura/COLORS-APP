import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';
import './Palette.css';
import { flexbox } from '@material-ui/system';

const styles = {
  Palette: {
    height: "100vh",
    display: "flexbox",
    flexDirection: "column",
  }
}

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level : 500, format: "hex" }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level){
    this.setState({level})
  }
  changeFormat(val){
    this.setState({format: val});
    console.log('spaos: ' + this.state.format);
  }
  render() {
    const {colors, paletteName, emoji, id} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        key={color.id} 
        background={color[format]} 
        name={color.name} 
        format={format} 
        id={color.id}
        paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar 
          level={level} 
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />
        <div className="Palette-colors">
          {/* Bunch of colors */}
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  }
}
 
export default withStyles(styles)(Palette);