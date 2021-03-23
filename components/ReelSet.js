import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LINES, REELS} from '../constants';
import Reel from './Reel';

export default class ReelSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
    this.reels = [];
    this.reelsInMotion = null;
    this.spinResults = [];
    this.winningLines = [];
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  highlightWinningLines = currentIndex => {
    if (!this.winningLines.length) {
      return;
    }

    if (currentIndex > 0) {
      LINES[this.winningLines[currentIndex - 1]].map(el => {
        this.reels[el[0]].highlightAtIndex(el[1], false);
      });
    }

    if (currentIndex > this.winningLines.length - 1) {
      return;
    }

    LINES[this.winningLines[currentIndex]].map(el => {
      this.reels[el[0]].highlightAtIndex(el[1], true);
      this.reels[el[0]].shakeAtIndex(el[1], true);
    });

    setTimeout(() => {
      this.highlightWinningLines(currentIndex + 1);
    }, 800);
  };

  evaluateResults = () => {
    this.winningLines = [];
    for (let lineIdx = 0; lineIdx < LINES.length; lineIdx++) {
      let streak = 0;
      let currentKind = null;

      for (let coorIdx = 0; coorIdx < LINES[lineIdx].length; coorIdx++) {
        let coords = LINES[lineIdx][coorIdx];
        let symbolAtCoords = this.spinResults[coords[0]][coords[1]];

        if (coorIdx === 0) {
          if (symbolAtCoords === 'D') {
            break;
          }
          currentKind = symbolAtCoords;
          streak = 1;
        } else {
          if (symbolAtCoords != currentKind) {
            break;
          }
          streak += 1;
        }
      }

      if (streak >= 3) {
        this.winningLines.push(lineIdx);
      }

      console.log(this.winningLines);
      this.highlightWinningLines(0);
    }
  };

  spin = () => {
    this.reelsInMotion = REELS;
    for (let i = 0; i < REELS; i++) {
      this.reels[i].scrollByOffSet(
        this.randomBetween(
          4 * this.reels[i].symbols.length,
          5 * this.reels[i].symbols.length,
        ),
        (reelIdx, results) => {
          this.reelsInMotion -= 1;
          this.spinResults[reelIdx] = results;

          if (this.reelsInMotion === 0) {
            this.evaluateResults();
          }
        },
      );
    }
  };

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
          ref={ref => {
            this.reels[idx] = ref;
          }}
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
    // backgroundColor: 'orange',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
