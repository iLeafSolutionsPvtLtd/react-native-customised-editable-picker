import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import CustomDropDown from './CustomDropDown';

let data  = ["React","Native","Android","Java","Hello World"];
 class App extends Component{
  render(){
    return(
      <CustomDropDown
      data={data}
      pickerStyle={this.props.pickerStyle}
      modalStyle={this.props.modalStyle}
      textinputStyle={this.props.textinputStyle}
      isEditable={true}
      />
    )
  }
}

AppRegistry.registerComponent('CustomDropDown', () => App);
