import './ignoreWarnings';

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/*  <Navigation /> */}
        <FadeScreen />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
