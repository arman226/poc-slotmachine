import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

export default class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      animatedValue: new Animated.Value(0),
    };
  }

  getImage = () => {
    switch (this.props.symbol) {
      case 'B':
        return 'maroon';
        break;
      case 'C':
        return 'orange';
        break;
      case 'X':
        return 'yellow';
        break;
      case 'D':
        return 'green';
        break;
      case 'G':
        return 'blue';
        break;
      case 'L':
        return 'indigo';
        break;
      case 'M':
        return 'violet';
        break;
      case 'O':
        return 'pink';
        break;
      case 'P':
        return 'purple';
        break;
      case '7':
        return 'brown';
        break;
      case 'S':
        return 'gray';
        break;

      default:
        return 'white';
    }
  };

  setActive = active => {
    this.setState({
      active: active,
    });
  };

  shake = () => {
    this.state.animatedValue.setValue(0);
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  render() {
    let symbolAnimation = [
      {
        scale: this.state.animatedValue.interpolate({
          inputRange: [0, 0.25, 0.5, 1],
          outputRange: [1, 1.25, 0.75, 1],
        }),
      },
      {
        rotate: this.state.animatedValue.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          outputRange: [
            '0deg',
            '15deg',
            '0deg',
            '-15deg',
            '0deg',
            '15deg',
            '0deg',
            '-15deg',
            '0deg',
            '15deg',
            '0deg',
          ],
        }),
      },
    ];
    return (
      <View
        style={[
          styles.container,
          {width: this.props.width, height: this.props.height},
        ]}>
        <Animated.View
          style={{
            width: this.props.width - 20,
            height: this.props.height - 20,
            backgroundColor: this.getImage(),
            borderRadius: 4,
            opacity: this.state.active ? 1 : 0.3,
            transform: symbolAnimation,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    padding: 15,
  },
});
