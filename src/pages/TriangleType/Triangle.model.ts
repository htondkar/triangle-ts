export enum TriangleSides {
  SIDE_ONE = 'sideOne',
  SIDE_TWO = 'sideTwo',
  SIDE_THREE = 'sideThree',
}

export interface Triangle {
  readonly [TriangleSides.SIDE_ONE]: number
  readonly [TriangleSides.SIDE_TWO]: number
  readonly [TriangleSides.SIDE_THREE]: number
}

export enum TriangleTypes {
  Equilateral = 'Equilateral',
  Isosceles = 'Isosceles',
  Scalene = 'Scalene',
}
