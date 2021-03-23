import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
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

  render() {
    return (
      <View
        style={[
          styles.container,
          {width: this.props.width, height: this.props.height},
        ]}>
        <View
          style={{
            width: this.props.width - 20,
            height: this.props.height - 20,
            backgroundColor: this.getImage(),
            borderRadius: 4,
            opacity: this.state.active ? 1 : 0.3,
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
