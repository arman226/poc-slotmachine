import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SYMBOL} from '../constants';
import Symbol from './Symbol';

export default class Reel extends Component {
  constructor(props) {
    super(props);
    this.symbols = 'BBCDGLGLCCCLLDDMS777XDBL';
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
          }}>
          {this.symbols.split('').map((el, idx) => {
            return (
              <Symbol
                symbol={el}
                key={idx}
                index={idx}
                width={this.props.width}
                height={this.symbolHeight}
              />
            );
          })}
        </View>
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
