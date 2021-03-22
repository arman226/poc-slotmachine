import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {MAX_HEIGHT, MAX_WIDTH} from './constants';
import ReelSet from './components/ReelSet';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.playContainer}>
        <ReelSet />
      </View>
      <View styles={styles.buttonContainer}>
        <Button
          title="spin"
          onPress={() => {
            console.log('Help');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    height: 60,
    width: MAX_WIDTH,
    backgroundColor: 'purple',
  },
  playContainer: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT - 60,
    backgroundColor: 'blue',
  },
});

export default App;
