import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SYMBOL} from '../constants';

export default class Symbol extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {width: this.props.width, height: this.props.height},
        ]}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
