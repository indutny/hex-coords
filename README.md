# hex-coords
[![Build Status](https://secure.travis-ci.org/indutny/hex-coords.svg)](http://travis-ci.org/indutny/hex-coords)
[![NPM version](https://badge.fury.io/js/hex-coords.svg)](https://badge.fury.io/js/hex-coords)

A library for converting cartesian coordinates to coordinates on a hexagon grid.

## Usage

```ts
import { Hex } from 'hex-coords';

const RADIUS = 1;

const hex = new Hex(RADIUS);

const xy = hex.toXY([ 2, 2 ]);
const coord = hex.fromXY([ 3, 3 ]);
```

The hexagon grid cells are enumerated using ["odd-r" layout][0]. The top-left
cell's center is `( 0, 0 )` in cartesian coordinates, and has `( 0, 0 )` grid
coordinate.

#### LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2018.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: https://www.redblobgames.com/grids/hexagons/#coordinates
