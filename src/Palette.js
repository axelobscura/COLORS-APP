import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

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
    const {colors} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.hex} background={color[format]} name={color.name} format={format} />
    ));
    return (
      <div className="Palette">
        <Navbar 
          level={level} 
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {/* Bunch of colors */}
          {colorBoxes}
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}
 
export default Palette;