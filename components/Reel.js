import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import {REELS_REPEAT, SYMBOL} from '../constants';
import Symbol from './Symbol';

export default class Reel extends Component {
  constructor(props) {
    super(props);
    this.symbols = 'BBCDGLGLCCCLLDDMS777XDBL';
    this.reelSymbols = this.symbols.repeat(REELS_REPEAT).split('');
    this.symbolRefs = [];

    this.position = this.reelSymbols.length - SYMBOL;

    this.symbolHeight = this.props.height / SYMBOL;
    this.currentScrollPos = this.position * this.symbolHeight * -1;
    this.state = {
      scrollPos: new Animated.Value(this.currentScrollPos),
    };
  }

  componentDidMount() {
    console.log(this.reelSymbols);
  }

  scrollByOffSet = offSet => {
    const negative = this.symbolHeight * offSet;
    this.currentScrollPos = this.currentScrollPos + negative;
    this.position = this.position - offSet;
    Animated.timing(this.state.scrollPos, {
      toValue: this.currentScrollPos,
      duration: 750 + this.props.index * 250,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.exp),
    }).start(() => {
      this.position =
        (REELS_REPEAT - 2) * this.symbols.length +
        (this.position % this.symbols.length);
      this.currentScrollPos = this.position * this.symbolHeight * -1;
      this.state.scrollPos.setValue(this.currentScrollPos);
    });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.width,
            height: this.props.height,
          },
        ]}>
        <Animated.View
          style={{
            width: this.props.width,
            height: this.reelSymbols.length * this.symbolHeight,
            transform: [{translateY: this.state.scrollPos}],
          }}>
          {this.reelSymbols.map((el, idx) => {
            return (
              <Symbol
                symbol={el}
                key={idx}
                index={idx}
                width={this.props.width}
                height={this.symbolHeight}
                ref={ref => {
                  this.symbolRefs[idx] = ref;
                }}
              />
            );
          })}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    overflow: 'hidden',
  },
});
