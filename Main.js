import { createStackNavigator, createAppContainer } from 'react-navigation';

import App from './App';
import Description from './screens/Description';
import Users from './screens/UserList';
import Profile from './screens/index';
import Welcome from './Welcome';
import Guide from './guide/Profile1/';


const Apps = createStackNavigator({
    Welcome,
    Guide,
    App,
    Description,
    Users,
    Profile
}, {
        headerMode: 'none',
        initialRouteName: 'Welcome'
    });

const Main = createAppContainer(Apps);
export default Main;