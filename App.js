import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Detail from './components/Detail';
import AboutScreen from './components/About';

const App = ({ navigation }) => {
  handleClick = e => {
    navigation.push('Detail');
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Hello React Native</Text>

      <Button
        title="This is button"
        onPress={() => {
          console.log('Clicked!');
          Alert.alert('Hello React Native');
        }}
      />

      <Button title="Go to Detail Page" onPress={handleClick} />

      <Button title="Go to about" onPress={() => navigation.push('About')} />
    </View>
  );
};

const AppStack = createStackNavigator(
  {
    Home: App,
    Detail,
    About: AboutScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 32,
    color: '#222'
  }
});

export default createAppContainer(AppStack);
