import { createStackNavigator, createAppContainer } from 'react-navigation';

import App from './App';
import Description from './screens/Description';
import Users from './screens/UserList';
import Profile from './screens/index';


const Apps = createStackNavigator({
    App,
    Description,
    Users,
    Profile
}, {
        headerMode: 'none',
        initialRouteName: 'App'
    });

const Main = createAppContainer(Apps);
export default Main;