import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './screens/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { Register } from './settings/Register';
import { Login } from './settings/Login';

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        {/* <Login/> */}
        <Register/>
       {/* <View style={styles.container}>        
      <Text style={styles.textColor}>React Native </Text>      
    </View> */}
      </NavigationContainer>
    </Screen>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
   color:"white"
  }
});
