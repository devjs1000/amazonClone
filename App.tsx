import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Splash from './src/screens/Splash';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <SafeAreaView>
      {loading ? (
        <Splash />
      ) : (
        <View>
          <Text>App</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
