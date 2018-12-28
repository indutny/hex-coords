import * as assert from 'assert';

import { Hex, Point } from '../src/hex';

function assertEqualPoints(a: Point, b: Point) {
  const toFixed = (val: number) => Math.round(val * 100) / 100;
  assert.deepStrictEqual(a.map(toFixed), b.map(toFixed));
}

describe('hex-coords', () => {
  it('should translate from hex to cartesian coordinates', () => {
    const h = new Hex(1);

    assertEqualPoints(h.toXY([ 0, 0 ]), [ 0, 0 ]);
    assertEqualPoints(h.toXY([ 1, 0 ]), [ Math.sqrt(3), 0 ]);
    assertEqualPoints(h.toXY([ 2, 0 ]), [ Math.sqrt(3) * 2, 0 ]);
    assertEqualPoints(h.toXY([ 1, 1 ]), [ Math.sqrt(3) * 3 / 2, 3 / 2 ]);
    assertEqualPoints(h.toXY([ 0, 2 ]), [ 0, 6 / 2 ]);
    assertEqualPoints(h.toXY([ 1, 2 ]), [ Math.sqrt(3), 6 / 2 ]);
  });

  it('should translate from cartesian coordinates to hex', () => {
    const h = new Hex(1);

    // Check boundaries of the first cell
    assert.deepStrictEqual(h.fromXY([ 0, 0 ]), [ 0, 0 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) / 2 - 0.1, 0 ]), [ 0, 0 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) / 2, 0 ]), [ 0, 0 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) / 2 + 0.1, 0 ]), [ 1, 0 ]);
    assert.deepStrictEqual(h.fromXY([ 0, 0.9 ]), [ 0, 0 ]);
    assert.deepStrictEqual(h.fromXY([ 0, 1.1 ]), [ 0, 1 ]);
    assert.deepStrictEqual(h.fromXY([ 1, 1 ]), [ 0, 1 ]);

    // Check boundaries of the second cell
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3), 0 ]), [ 1, 0 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) * 3 / 2 - 0.1, 0 ]),
      [ 1, 0 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3), 0.9 ]),
      [ 1, 0 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) * 2 - 0.1, 1.1 ]),
      [ 1, 1 ]);

    // Check boundaries of the second row cell
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) / 2, 1 ]), [ 0, 1 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3) * 3 / 2, 1 ]), [ 1, 1 ]);
    assert.deepStrictEqual(h.fromXY([ Math.sqrt(3), 3 ]), [ 1, 2 ]);
    assert.deepStrictEqual(h.fromXY([ 0, 5 / 2 ]), [ 0, 2 ]);
  });
});
