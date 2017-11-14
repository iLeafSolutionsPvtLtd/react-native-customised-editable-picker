import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  View
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class CustomDropDown extends Component {
  constructor(props) {
    super(props);
    this.state={
      picker:"please select",
      pickList:false,
      textEnable:false,
      isVisible:false,
      modalData:this.props.data,
      textValue:[]
    }
  }

  _renderPicker(){
    return(
      <View style={{marginTop:20}}>
        <FlatList
          data={this.state.modalData}
          renderItem={({item}) =>
            <TouchableOpacity
              style={this.props.pickerStyle||{width:width/2,height:height/15}}
              onPress={()=>{
                this.setState({picker:item,pickList:false,textValue:item})
              }}>
              <Text style={{marginLeft:5,color:"black"}}>{item}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }

  _filterResults(text){
    console.log("text",text);
    let fullData = this.props.data.slice();
    this.setState({modalData:fullData.filter(value => value.toLowerCase().startsWith(text.toLowerCase()))})
    console.log("modalData: ",this.state.modalData,this.state.textValue,fullData);
  }

  _addData(){
    this.props.data.push(this.state.textValue);
    this.setState({textValue:""})
  }

  render(){
    return(
      <View style={styles.container}>
        {!this.state.isVisible?
          <TouchableOpacity
           style={this.props.modalStyle||styles.picker}
           onLongPress={()=>{
            { this.props.isEditable?
             this.setState({isVisible:true})
                :null}
           }}

           onPress={()=>{
             this.setState({pickList:true})
           }}
           >
              <Text style={{marginLeft:5,color:"black"}}>{this.state.picker}</Text>
          </TouchableOpacity>
          :
          <View style={{flexDirection:"row"}}>
            <TextInput style={this.props.textinputStyle||styles.component}
            placeholder = "please select"
            underlineColorAndroid='transparent'
            onChangeText={(text)=>{
              this._filterResults(text);
              this.setState({pickList:true,textValue: text})
            }}
             value={this.state.textValue}
            />
            <TouchableOpacity
            style={styles.picklist}
              onPress={()=>{
                this._addData();
              }}
            >
            <Text style={{fontSize:25}}>+</Text>
            </TouchableOpacity>
          </View>
        }
        {this.state.pickList?
          this._renderPicker()
        :null}
      </View>
     )
   }
 }

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:50
  },
  picker:{
    width:width-100,
    height:50,
    borderColor:"black",
    borderWidth:1,
    justifyContent:"center"
  },
  component:{
    width:width-100,
    height:50,
    borderColor:"black",
    borderWidth:1}
    ,
  picklist:{
    alignItems:"center",
    justifyContent:"center",
    paddingLeft:15
  }
})
