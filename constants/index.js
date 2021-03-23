import {Dimensions} from 'react-native';

export const MAX_WIDTH = Dimensions.get('window').width;
export const MAX_HEIGHT = Dimensions.get('window').height;
export const REELS = 5;
export const REELS_REPEAT = 10;
export const SYMBOL = 3;
export const LINES = [
  //top horizontal line's coordinates
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ],
  //middle horizontal line's coordinates
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
  ],
  //bottom horizontal line's coordinates
  [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
  ],
  //V-shape starting from top left
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 1],
    [4, 0],
  ],
  //V-shape starting from bottom left
  [
    [0, 2],
    [1, 1],
    [2, 0],
    [3, 1],
    [4, 2],
  ],
  //W-shape starting from top left
  [
    [0, 0],
    [1, 2],
    [2, 0],
    [3, 2],
    [4, 0],
  ],
  //M-shape starting from bottom left
  [
    [0, 2],
    [1, 0],
    [2, 2],
    [3, 0],
    [4, 2],
  ],
  //M-shape starting on top half
  [
    [0, 1],
    [1, 0],
    [2, 1],
    [3, 0],
    [4, 1],
  ],
  //W-shape starting on top half
  [
    [0, 0],
    [1, 1],
    [2, 0],
    [3, 1],
    [4, 0],
  ],
  //W-shape starting on bottom half
  [
    [0, 1],
    [1, 2],
    [2, 1],
    [3, 2],
    [4, 1],
  ],
  //M-shape starting on bottom half
  [
    [0, 2],
    [1, 1],
    [2, 2],
    [3, 1],
    [4, 2],
  ],
  //U-shape starting on top half
  [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 0],
  ],
  //U-shape starting on bottom half
  [
    [0, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 1],
  ],
  //inverse U-shape starting on top half
  [
    [0, 1],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 1],
  ],
  //inverse U-shape starting on bottom half
  [
    [0, 2],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2],
  ],
  //Z-shape from top left
  [
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 2],
  ],
  //Z-shape from bottom left
  [
    [0, 2],
    [1, 2],
    [2, 1],
    [3, 0],
    [4, 0],
  ],
];
