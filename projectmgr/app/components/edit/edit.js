/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  AsyncStorage,
  View
} from 'react-native';


export default class Edit extends Component<{}> {
   constructor(props){
    super(props);

    this.state = {
      id: this.props.navigation.state.params.project.id,
      name: this.props.navigation.state.params.project.name,
      category: this.props.navigation.state.params.project.category,
      description: this.props.navigation.state.params.project.description,
      leader: this.props.navigation.state.params.project.leader,
      due: this.props.navigation.state.params.project.due
    }

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(){
    AsyncStorage.getItem('projects').then((value) => {
      let projects = JSON.parse(value);
      for(let i = 0; i < projects.length; i++){
        if(projects[i].id == this.state.id){
          projects.splice(i,1);
        }
      }

      projects.push({
        id: this.state.id,
        name: this.state.name,
        category: this.state.category,
        description: this.state.description,
        leader: this.state.leader,
        due: this.state.due
      });

      AsyncStorage.setItem('projects', JSON.stringify(projects));

      this.props.navigation.navigate('Projects');

    });
  }

  render() {
    
    return (
      <View>
         <TextInput style={styles.textInputStyle}
          value={this.state.name}
          placeholder='Project Name'
          onChangeText={(value) => this.setState({name:value})}
        />
        <TextInput style={styles.textInputStyle}
          value={this.state.category}
          placeholder='Project Category'
          onChangeText={(value) => this.setState({category:value})}
        />
        <TextInput style={styles.textInputStyle}
          value={this.state.description}
          placeholder='Project Description'
          onChangeText={(value) => this.setState({description:value})}
        />
        <TextInput style={styles.textInputStyle}
          value={this.state.leader}
          placeholder='Project Leader'
          onChangeText={(value) => this.setState({leader:value})}
        />
        <TextInput style={styles.textInputStyle}
          value={this.state.due}
          placeholder='Project Due'
          onChangeText={(value) => this.setState({due:value})}
        />
        <View style={styles.btnContainer}>
          <Button
            onPress={this.onSubmit.bind(this)}
            title="Submit"
            color= {(Platform.OS === 'ios') ? 'white' : 'black'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   addform:{
    backgroundColor: '#b0d4ff',
    padding: 20
   },
   btnContainer:{
      backgroundColor: 'black',
      padding: 3,
      marginTop: 20
   },
   textInputStyle:{
      borderBottomWidth: (Platform.OS === 'ios') ? 1 : 0,
      margin: (Platform.OS === 'ios') ? 8 : 0,
   }
});






