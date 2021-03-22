import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {REELS} from '../constants';
import Reel from './Reel';

export default class ReelSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };

  renderReels = () => {
    let reelWidth = this.state.width / REELS;
    let reelList = Array.apply(null, Array(REELS)).map((el, idx) => {
      return (
        <Reel
          width={reelWidth}
          height={this.state.height}
          key={idx}
          index={idx}
        />
      );
    });

    return <>{reelList}</>;
  };

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        {this.state.width && this.state.height && this.renderReels()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
});
