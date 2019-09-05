import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  Colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
  }
}

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex'
    };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, colorFilterBy){
    let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilterBy)
      )
    }
    return shades.slice(1);
  }
  changeFormat(val){
    this.setState({format: val})
  }
  render() {
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const {classes} = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[format]} 
        showingFullPalette={false}
      />
    ))
    
    return (
      <div className={classes.Palette}>
        <Navbar
          handleChange={this.changeFormat}
          showingAllColors={false}
        />
        <div className={classes.colors}>
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
 
export default withStyles(styles)(SingleColorPalette);