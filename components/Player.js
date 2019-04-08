import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons'


const playerStyles = StyleSheet.create({
    player:{
      backgroundColor:'white',
      margin: 5,
      padding:2,
      flexDirection: 'row',
      fontSize: 50,
      margin: 30,
      borderColor:'black',
      borderRadius: 5,
      borderWidth: 2
    },
    life:{
      color:'black',
      fontSize: 80,
      textAlign: 'center',
      padding: 20
    },
    button:{
      flex:0.2,
      height:50,
      marginTop: 'auto',
      textAlign:'center',
      borderRadius: 10,
      marginLeft:20,
      marginRight: 20,
      marginBottom:10,
      padding: 0
    },
    text: {
     textAlign:'center',
     color: 'black',
     fontSize:50
    }


});
class Player extends Component{
  constructor(props){
    super(props);
    this.state = {life: this.props.life}
    this.onPressAdd = this.onPressAdd.bind(this);
    this.onPressSub = this.onPressSub.bind(this);
    this.onPressReset = this.props.onPressReset;

  }

  onPressAdd = () => {
    this.setState({life: this.state.life + 1});
  }  

  onPressSub = () =>{
    this.setState((state, props) => ({life: this.state.life -1}));
  }
  /*onPressReset = () => {
    this.setState({life: this.props.life});
  }*/
  render(){
    return(
      <View style = {playerStyles.player}>
        
        <TouchableOpacity style={{position:'absolute', top: 0, padding: 10}}onPress = {this.onPressReset}>
              <FontAwesomeIcon icon={ faRedo } />
        </TouchableOpacity>
        <TouchableOpacity style={[{backgroundColor: 'white'}, playerStyles.button]}onPress = {this.onPressSub}>
          <Text style={playerStyles.text}> - </Text>
        </TouchableOpacity>

        <View style={{flex: 0.6, backgroundColor: 'white'}}>
            
            <Text style = {playerStyles.life}>{this.state.life > 0 ? this.state.life : 'You SUCK!!!'}</Text>
        </View>
        

        <TouchableOpacity style={[{backgroundColor:'white'}, playerStyles.button]} title='+' color='green' onPress = {this.onPressAdd}>
          <Text style={playerStyles.text}> + </Text>
        </TouchableOpacity>

      </View>
      

    );
  }
}

export default Player;