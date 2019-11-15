import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from "react-color";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: ''
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
      this.props.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value => 
      this.props.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    );
  }
  updateCurrentColor(newColor){
    this.setState({currentColor: newColor.hex});
  };
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
    this.setState({newPaletteName: evt.target.value})
  }
  handleSubmit(){
    const newColor = {
      color: this.state.currentColor, 
      name: this.state.newColorName
    }
    this.props.addNewColor(newColor);
    this.setState({
      newColorName: ""
    })
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator 
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={['required','isColorUnique', 'isColorNameUnique']}
            errorMessages={['Enter a color name','The color must be unique!', 'Each color has to be unique!']}
          />
          <Button 
          variant='contained'
          type='submit'
          color='primary'
          disabled={paletteIsFull}
          style={{
            backgroundColor: paletteIsFull 
              ? "grey"
              : currentColor}}
        >
          {paletteIsFull ? "Palette is full" : "Add Color"}
        </Button>
        </ValidatorForm>
      </div>
    );
  }
}
 
export default ColorPickerForm;