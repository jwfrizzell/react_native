import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';


export default class TranslateInput extends Component<{}> {
  constructor(){
    super();

    this.state = {
      translateString: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Translate a Word</Text>
        <View style={styles.row}>
          <TextInput 
            underlineColorAndroid='transparent'
            style={styles.translateInput}
            onChangeText={(value) => this.setState({translateString: value})}
            placeholder='Enter a word...'
          />

          <TouchableHighlight
            style={styles.button}
            onPress={() => {this.props.onSubmit(this.state.translateString)}}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>
              Go
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description:{
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: "#656565"
  },
   container:{
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  button:{
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48bbec',
    borderColor: "#48bbec",
    borderWidth: 2,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  translateInput:{
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#48bbec",
    borderRadius: 8,
    color: "#48bbec"
  }
});
