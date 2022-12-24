import {SafeAreaView} from 'react-native';
import React from 'react';
import Screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/states/store';

const App = () => {
  return (
   
      <Provider store={store}>
        <Screens />
      </Provider>
  );
};

export default App;
