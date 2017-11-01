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
  TextInput,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

import Toolbar from '../toolbar/toolbar';

export default class Books extends Component<{}> {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2});

    this.state = {
      bookDataSource:ds,
      text:''
    }

    this.pressRow = this.pressRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  fetchBooks(){
     fetch('https://www.googleapis.com/books/v1/volumes?q='+this.state.text.toString())
      .then((response) => response.json())
      .then((responseData) => {

        this.setState({
          bookDataSource: this.state.bookDataSource.cloneWithRows(responseData.items)
        });

      });
  }

  onTextChange(text){
    this.setState({
      text:text
    }, function(){
      console.log(this.state.text);
      this.fetchBooks();
    })
  }

  pressRow(book) {
    this.props.navigation.navigate('BookDetails',{
      id: 'details',
      book: book
    });
  }


  renderRow(book){
    var img = book.volumeInfo.imageLinks.thumbnail.toString();

    return(
      <TouchableHighlight 
        onPress={() => {
          this.pressRow(book)
        }}>
        <View  style={styles.row}>
          <Image style={styles.thumb} source={{
            uri: img
          }}/>
          <View style={styles.bookInfo}>
            <Text style={styles.title}>
              {book.volumeInfo.title}
            </Text>
            <Text style={styles.subtitle}>
              {book.volumeInfo.subtitle}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <TextInput 
          style={styles.textInput}
          placeholder="Search Books..."
          value={this.state.text}
          onChangeText={(text) => this.onTextChange(text)}
        />
        <ListView
          dataSource={this.state.bookDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 row:{
  flexDirection: 'row',
  justifyContent:'center',
  padding: 12,
  backgroundColor: "#666666",
  marginBottom: 3
 },
 bookInfo:{
  flex: 1,
  marginLeft: 5
 },
 title:{
  color: "#ffffff",
  fontSize: 16
 },
 thumb:{
  width: 64,
  height: 64
 }
})