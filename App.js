import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Player from './components/Player';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.onPressNewGame = this.onPressNewGame.bind(this);
  }


  onPressNewGame = () => {
    this.state.life = 20;
  }
  render() {
    const life = 20;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {this.onPressNewGame}>
            <Text style={{textAlign:'left', paddingLeft:30, fontSize:20}}>New Game</Text>
        </TouchableOpacity>
        <View style={styles.container}>
            <Player life={life} onPressNewGame = {this.onPressNewGame}/>
            <Player life={life}  onPressNewGame = {this.onPressNewGame}/>
        </View>
        
        <Text style={{marginTop:'auto', textAlign:'right'}}>Magic Lifecounter by dl6</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor: '#e54e4e',
    justifyContent: 'center',
  },
});
