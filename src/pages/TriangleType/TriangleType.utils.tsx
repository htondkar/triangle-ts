import { Triangle, TriangleTypes } from './Triangle.model';

export function determineTriangleType(triangle: Triangle): TriangleTypes {
  const { sideOne, sideTwo, sideThree } = triangle

  if (sideOne === sideTwo && sideTwo === sideThree) {
    return TriangleTypes.Equilateral
  }

  if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
    return TriangleTypes.Isosceles
  }

  return TriangleTypes.Scalene
}
