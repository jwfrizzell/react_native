/*
==================================================
#NOTES"
in root run (npm install --save react-naviagation)
==================================================
*/
import { StackNavigator } from 'react-navigation';
import {AppRegistry,View} from 'react-native';
import Projects from '../projects/projects';
import AddForm from '../addform/addform';
import ProjectDetails from '../projectdetails/projectdetails';
import Edit from '../edit/edit'

const AppNavigator = StackNavigator({
	Projects: {
		screen: Projects,
		navigationOptions:{
			header: null
		}
	},
	AddForm: {
		screen: AddForm,
		navigationOptions:{
			headerTitle: 'Add Project',
			headerTitleStyle :{
				textAlign: 'center',
				alignSelf:'center',
				color: 'white',
				fontSize: 13
			},
			headerStyle:{
				backgroundColor: '#333333',
    		padding: 10,
    		height: 45
			}
		}
	},
	ProjectDetails:{
		screen: ProjectDetails,
		navigationOptions:{
			header:null
		}
	},
	Edit: {
		screen: Edit,
		navigationOptions:{
			headerTitle: 'Add Project',
			headerTitleStyle :{
				textAlign: 'center',
				alignSelf:'center',
				color: 'white',
				fontSize: 13
			},
			headerStyle:{
				backgroundColor: '#333333',
    		padding: 10,
    		height: 45
			}
		}
	}
},
{
	initialRouteName: 'Projects'
});

export default AppNavigator;