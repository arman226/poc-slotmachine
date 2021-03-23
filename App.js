import React, {Component} from 'react';
import {View, StyleSheet, Button, SafeAreaView} from 'react-native';
import {MAX_HEIGHT, MAX_WIDTH} from './constants';
import ReelSet from './components/ReelSet';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.reelSet = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.playContainer}>
          <ReelSet
            ref={ref => {
              this.reelSet = ref;
            }}
          />
        </SafeAreaView>
        <View styles={styles.buttonContainer}>
          <Button
            title="spin"
            onPress={() => {
              this.reelSet.spin();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    height: 60,
    width: MAX_WIDTH,
    backgroundColor: 'black',
  },
  playContainer: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT - 60,
    backgroundColor: 'black',
  },
});
