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
  View,
  ListView,
  TouchableHighlight,
  Button,
  AsyncStorage
} from 'react-native';
import Toolbar from '../toolbar/toolbar';

export default class Projects extends Component<{}> {
  constructor(){
    super();

    let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

    this.state = {
      projDataSource: ds
    }

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount(){
    this.getProjects();
  }

  componentDidMount(){
    this.getProjects();
  }

  getProjects(){
    // let projects = [
    //   {
    //     id:1,
    //     name: 'Project One',
    //     category: 'Mobile App',
    //     description: 'Awesome React Native application',
    //     leader: 'John Doe',
    //     due: '07-01-2017'
    //   },
    //   {
    //     id:2,
    //     name: 'Project Two',
    //     category: 'Web App',
    //     description: 'Cool Ruby on rails application',
    //     leader: 'Kevin Smith',
    //     due: '09-01-2017'
    //   },
    //   {
    //     id:3,
    //     name: 'Project Three',
    //     category: 'Web App',
    //     description: 'Great Node.js application',
    //     leader: 'Sara Wilson',
    //     due: '010-01-2017'
    //   }
    // ];

    AsyncStorage.getItem('projects').then((value) => {
      if(value == undefined){
        console.log('No Projects');
      }
      else{
        let projects = JSON.parse(value);
        this.setState({
          projDataSource: this.state.projDataSource.cloneWithRows(projects)
        });
      }
    });

  }

  pressRow(project){
    this.props.navigation.navigate('ProjectDetails',{
      project: project
    });
  }

  renderRow(project){
    return(
      <TouchableHighlight
        onPress={() => {this.pressRow(project)}}
      >
        <View style={styles.row}>
          <Text style={styles.text}>
            {project.name}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate("AddForm")}>
          <Text style={styles.textButton}>Add Project</Text>
        </TouchableHighlight>
        <ListView
          dataSource={this.state.projDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0186a3'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#b0d4ff',
    marginBottom: 3
  },
  text:{
    flex: 1
  },
   button:{
    backgroundColor: '#066377',
    padding: 5,
    margin: 5
  },
  textButton:{
    color: 'white',
    textAlign: 'center'
  }
});