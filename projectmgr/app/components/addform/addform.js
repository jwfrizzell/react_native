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
import Toolbar from '../toolbar/toolbar'


export default class AddForm extends Component<{}> {
  constructor(){
    super();
    this.state = {
      id: '',
      name: '',
      category: '',
      description: '',
      leader: '',
      due: '',
      projects: []
    }
  }
  componentWillMount(){
    this.getProjects();
    this.generateId();
  }

  getProjects(){
    AsyncStorage.getItem('projects').then((value) => {
      console.log(value);
      if(value != undefined){
        this.setState({projects: JSON.parse(value)});
      }
    })
  }

  generateId(){
    let rand_id = Math.floor(Math.random() * 1000000000);
    this.setState({id: rand_id});
  }

  onSubmit(){
    let projects = this.state.projects;
    projects.push({
      id: this.state.id,
      name: this.state.name,
      category: this.state.category,
      description: this.state.description,
      leader: this.state.leader,
      due: this.state.due
    });

    AsyncStorage.setItem('projects', JSON.stringify(projects));

    this.props.navigation.navigate("Projects");
  }
  

  render() {
    return (
      <View style={styles.addform}>
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