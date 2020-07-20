/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RenderWebview from './src/RenderWebviewExample/RenderWebViewExample';
import ScrollToIndex from './src/ScrollToIndexExample/ScrollToIndexExample';
import SearchBarList from './src/SearchBarListExample/SearchBarListExample';
import AddRemoveEmptyFlatList from './src/AddRemoveEmptyFlatList/AddRemoveEmptyFlatListExample';
import PinchToZoomImage from './src/PinchToZoomImage/PinchToZoomImage';
import ImageIconInsideButton from './src/ImageIconInsideButton/ImageIconInsideButton';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ImageIconInsideButton />
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <ImageIconInsideButton />
        </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;
