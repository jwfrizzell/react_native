
import { StackNavigator } from 'react-navigation';
import {AppRegistry,View} from 'react-native'
import Books from '../books/books';
import BookDetails from '../bookdetails/bookdetails';


export const AppNavigator = StackNavigator({
    Books: {
    	screen: Books,
    	navigationOptions:{
    		header:null
    	}
    },
    BookDetails: {
        screen: BookDetails,
        navigationOptions: {
            header:null
        }
    }
  }
	,{
		initialRouteName: 'Books'
	}
);

export default AppNavigator;