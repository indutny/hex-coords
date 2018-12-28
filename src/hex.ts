export type Point = [ number, number ];

const DOUBLE_SIN = Math.sqrt(3);

export class Hex {
  private readonly horizontalSpace: number;
  private readonly verticalSpace: number;

  constructor(private readonly radius: number) {
    this.horizontalSpace = DOUBLE_SIN * this.radius;
    this.verticalSpace = 3 / 2 * this.radius;
  }

  public fromXY(input: Point): Point {
    const x = input[0];
    const y = input[1];

    const row = Math.floor(y / this.verticalSpace);
    const column = Math.floor((x / this.horizontalSpace) - (row % 2) / 2);

    const topLeft: Point = [ column, row ];
    const right: Point = [ column + 1, row ];
    const bottom: Point = [ column + (row % 2), row + 1 ];

    // This is unoptimal, but very transparent
    const toTopLeft = this.distance(input, this.toXY(topLeft));
    const toRight = this.distance(input, this.toXY(right));
    const toBottom = this.distance(input, this.toXY(bottom));

    const min = Math.min(toTopLeft, toRight, toBottom);

    if (toTopLeft === min) {
      return topLeft;
    } else if (toRight === min) {
      return right;
    } else {
      return bottom;
    }
  }

  public toXY(input: Point): Point {
    const column = input[0];
    const row = input[1];

    const y = row * this.verticalSpace;
    const x = (column + (row % 2) / 2) * this.horizontalSpace;

    return [ x, y ];
  }

  private distance(a: Point, b: Point): number {
    return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
  }
}
