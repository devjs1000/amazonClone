import {View, Text} from 'react-native';
import React from 'react';
import useSelect from '../hooks/useSelect';
import Splash from './Splash';
import useMount from '../hooks/useMount';
import useAction from '../hooks/useAction';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Account from './Account';
import Cart from './Cart';
import Menu from './Menu';

const Tab = createBottomTabNavigator();

const Screens = () => {
  const splash = useSelect(state => state.process.splash);
  const {hideSplash} = useAction();

  useMount(() => {
    setTimeout(hideSplash, 2000);
  });
  return (
    <>
      {splash ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerTitle: '',
            }}>
            <Tab.Screen name={'home'} component={Home} />
            <Tab.Screen name={'Account'} component={Account} />
            <Tab.Screen name={'Cart'} component={Cart} />
            <Tab.Screen name={'Menu'} component={Menu} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Screens;
