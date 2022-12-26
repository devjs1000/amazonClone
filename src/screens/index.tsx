import {View, Text, AppState, StatusBar} from 'react-native';
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
import {NavBarForSearch} from '../components/NavBars';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ion from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/theme.constant';
import NavBarBasic from '../components/NavBars/NavBarBasic';
const Tab = createBottomTabNavigator();

const Screens = () => {
  const splash = useSelect(state => state.process.splash);
  const {hideSplash} = useAction();

  useMount(() => {
    setTimeout(hideSplash, 2000);
  });
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      {splash ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerTitle: '',
              tabBarActiveTintColor: 'black',
            }}>
            <Tab.Screen
              options={{
                header: ({navigation}) => (
                  <NavBarForSearch navigation={navigation} />
                ),
                tabBarIcon: ({color, size}) => (
                  <Ion name={'home-outline'} size={size} color={color} />
                ),
              }}
              name={'home'}
              component={Home}
            />

            <Tab.Screen
              name={'Account'}
              component={Account}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ion name={'person-outline'} size={size} color={color} />
                ),
                header: ({navigation}) => (
                  <NavBarBasic navigation={navigation} />
                ),
              }}
            />
            <Tab.Screen
              name={'Cart'}
              component={Cart}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ion name={'cart-outline'} size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name={'Menu'}
              component={Menu}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ion name={'menu-outline'} size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Screens;
