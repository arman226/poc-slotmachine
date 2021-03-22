import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SYMBOL} from '../constants';

export default class Reel extends Component {
  constructor(props) {
    super(props);
    this.symbols = 'LKDFJLAKFJDJKALFJDP';
    this.symbolHeight = this.props.height / SYMBOL;
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {width: this.props.width, height: this.props.height},
        ]}>
        <View
          style={{
            width: this.props.width,
            height: this.symbols.length * this.symbolHeight,
          }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    overflow: 'hidden',
  },
});
