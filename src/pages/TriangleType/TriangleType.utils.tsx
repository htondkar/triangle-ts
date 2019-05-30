import { Triangle, TriangleTypes } from './Triangle.model';

export function determineTriangleType(triangle: Triangle): TriangleTypes {
  const { sideOne, sideTwo, sideThree } = triangle

  // all sides are equal in an Equilateral triangle
  if (sideOne === sideTwo && sideTwo === sideThree) {
    return TriangleTypes.Equilateral
  }

  // Isosceles has two sides of equal length
  if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
    return TriangleTypes.Isosceles
  }

  return TriangleTypes.Scalene
}
