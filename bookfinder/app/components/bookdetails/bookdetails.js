
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Image,
  Linking,
  ScrollView
} from 'react-native';
import Toolbar from '../toolbar/toolbar';

export default class BookDetails extends Component<{}> {
  
  goBack(){
    this.props.navigation.goBack();
  }

  buttonPress(link){
    Linking.canOpenURL(link).then(supported => {
      if(supported){
        Linking.openURL(link);
      }
      else{
        alert('Cannot Go To Link!')
      }
    })
  }

  render() {
    const {state} = this.props.navigation;

    return (
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Toolbar title={state.params.book.volumeInfo.title} />
          <Button 
            title="Go Back" 
            color="#333333"
            onPress={this.goBack.bind(this)}
          />
          <Image 
            style={styles.image}
            source={{uri: state.params.book.volumeInfo.imageLinks.thumbnail}}
          />
          <View style={styles.titles}>
            <Text style={styles.title}>
             {state.params.book.volumeInfo.title}
            </Text>
            <Text style={styles.title}>
             {state.params.book.volumeInfo.subtitle}
            </Text>
          </View>
          <View style={styles.body}>
            <Text numberOfLines={10} style={styles.description}>
              {state.params.book.volumeInfo.description}
            </Text>
            <Text style={styles.info}> Publisher: {state.params.book.volumeInfo.publisher}  </Text>
            <Text style={styles.info}> Publish Date: {state.params.book.volumeInfo.publishedDate}  </Text>
            <Text style={styles.info}> Page Count: {state.params.book.volumeInfo.pageCount}  </Text>
            <Text style={styles.info}> Average Rating: {state.params.book.volumeInfo.averageRating}  </Text>
            <Button 
              onPress={() => this.buttonPress(state.params.book.volumeInfo.previewLink)}
              title='Book Preview...'
              color='#841584'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  detailsContainer:{
    padding: 30
  },
  image:{
    width: (Platform.OS === 'ios') ? 315 : 351,
    height:200,
    padding: 50,
    marginBottom: (Platform.OS === 'ios') ? 10 : 0,
  },
  titles:{
    backgroundColor: "#666666",
    padding: 10,
    marginBottom: 10
  },
  title:{
    color:"#eeeeee",

  },
  subtitle:{

  },
  description:{
    marginBottom: 10
  },
  info:{
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#333333",
    color: "#ffffff"
  }
});