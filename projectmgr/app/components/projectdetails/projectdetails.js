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
  View,
  TouchableHighlight,
  Share
} from 'react-native';
import Toolbar from '../toolbar/toolbar';

export default class ProjectDetails extends Component<{}> {
  constructor(){
    super();
  }

  onEdit(state){
    let project = {
      id: state.params.project.id,
      name: state.params.project.name,
      category: state.params.project.category,
      leader: state.params.project.leader,
      due: state.params.project.due,
      description: state.params.project.description
    };

    this.props.navigation.navigate('Edit',{
      project: project
    });
  }

  onDelete(state){
     AsyncStorage.getItem('projects').then((value) => {
      let projects = JSON.parse(value);
      for(let i = 0; i < projects.length; i++){
        if(projects[i].id == state.params.project.id){
          projects.splice(i,1);
        }
      }

      AsyncStorage.setItem('projects', JSON.stringify(projects));

      this.props.navigation.navigate('Projects');

    });
  }

  onShare(state){
    Share.share({
      message: state.params.project.description
    }).then(() => {
      this.props.navigate.navigation('Projects');
    }).catch((error) => console.log(error));
  }

  render() {
    const {state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Toolbar title={state.params.project.name}/>
        <View style={styles.info}>
          <Text style={styles.text}>Category: {state.params.project.category}</Text>
          <Text style={styles.text}>Leader: {state.params.project.leader}</Text>
          <Text style={styles.text}>Due On: {state.params.project.due}</Text>
          <Text style={styles.description}>Project Info: {state.params.project.description}</Text>
        </View>
        <TouchableHighlight 
          style={styles.btn}
          onPress={() => {this.onEdit(state)}}>
          <Text style={styles.text}>Edit Project</Text>
        </TouchableHighlight>

         <TouchableHighlight 
          style={styles.btn}
          onPress={() => {this.onDelete(state)}}>
            <Text style={styles.text}>Delete Project</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.btn}
          onPress={() => {this.onShare(state)}}>
            <Text style={styles.text}>Send to Contact</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0186a3',
    padding: 15,
    flex: 1
  },
  text:{
    color: '#ffffff',
    textAlign: 'center'
  },
  info:{
    marginBottom: 10
  },
  description:{
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: 5,
    textAlign: 'center',
    margin: 10
  },
  btn:{
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    margin: 5
  }

});






