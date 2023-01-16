import RegisterScreen from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login';
import TurnosScreen from './Screens/Turnos';
import UserNormal from './Screens/UserNormal';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'#24242c'}}} initialRouteName="Login" >
      <Stack.Screen  name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen  name="Login" component={LoginScreen}options={{headerShown:false}}/>
      <Stack.Screen name="Turnos" component={TurnosScreen}options={{headerShown:false}}/>
      <Stack.Screen name="UserNormal" component={UserNormal}options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;