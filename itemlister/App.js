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
  Modal,
  TextInput
} from 'react-native';
//import AppNavigate from './app/components/appnavigate/appnavigate';
import Toolbar from './app/components/toolbar/toolbar';
import * as firebase from 'firebase';
import AddButton from './app/components/addbutton/addbutton';
const styles = require('./app/style.js');

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA95Gl5pb5tafKe5sZ2EZUBuTykhInpBIo",
  authDomain: "itemlister-c197e.firebaseapp.com",
  databaseURL: "https://itemlister-c197e.firebaseio.com",
  storageBucket: "itemlister-c197e.appspot.com"
});

export default class App extends Component<{}> {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

    this.state = {
      text: '',
      itemDataSource: ds,
      modalVisible: false
    }

    this.itemRef = this.getRef();
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  setModalVisible(visible){
    this.setState({
      modalVisible: visible
    });
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount(){
    this.getItems(this.itemRef);
  }

  componentDidMount(){
    this.getItems(this.itemRef);
  }

  getItems(itemRef){
    //let items = [{title: 'Item One'},{title: 'Item Two'}];

    itemRef.on('value', (snapshot) => {
      let items = [];
      snapshot.forEach((child) => {
        items.push({
          title: child.val().title,
          key: child.key
        });
      });
      this.setState({ itemDataSource: this.state.itemDataSource.cloneWithRows(items)});
    });
  }

  pressRow(item){
    this.itemRef.child(item.key).remove();
  }

  addItem(){
    this.setModalVisible(true);
  }

  renderRow(item){
    return(
      <TouchableHighlight onPress={() => {
          this.pressRow(item);
        }}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {item.title}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Toolbar title="Add Item"/>
            <TextInput 
              value={this.state.text}
              placeholder= 'Add Item'
              onChangeText={(value) => this.setState({
                text: value
              })}
             />
            <TouchableHighlight onPress={() => {
              this.itemRef.push({title: this.state.text})
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Save Item</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Cancel</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
        <Toolbar title="Item Lister"/>
        <ListView 
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title='Add Item'/>
      </View>

    );
  }
}

