import Joi from '@hapi/joi';

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

export function determineTriangleType({
  sideOne,
  sideTwo,
  sideThree,
}: Triangle): TriangleTypes {
  if (sideOne === sideTwo && sideTwo === sideThree) {
    return TriangleTypes.Equilateral
  }

  if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
    return TriangleTypes.Isosceles
  }

  return TriangleTypes.Scalene
}

export function isValidTriangle(triangle: Partial<Triangle>): triangle is Triangle {
  if (hasAllTheSides(triangle) && passesTriangleInequalityTheoremTest(triangle)) {
    return true
  } else {
    return false
  }
}

function hasAllTheSides(triangle: Partial<Triangle>): triangle is Triangle {
  const { error } = Joi.validate(triangle, getTriangleValidationSchema())
  return error === null ? true : false
}

export function getTriangleValidationSchema() {
  const positiveNumber = Joi.number()
    .required()
    .positive()

  return Joi.object().keys({
    [TriangleSides.SIDE_ONE]: positiveNumber,
    [TriangleSides.SIDE_TWO]: positiveNumber,
    [TriangleSides.SIDE_THREE]: positiveNumber,
  })
}

/**
 * @function passesTriangleInequalityTheoremTest is a litmus test to determine is it's
 * mathematically possible and valid to form a triangle with the input values. for mor info
 * @see {@link https://en.wikipedia.org/wiki/Triangle_inequality}
 */
function passesTriangleInequalityTheoremTest({ sideOne, sideTwo, sideThree }: Triangle) {
  return (
    sideOne + sideTwo >= sideThree &&
    sideOne + sideThree >= sideTwo &&
    sideTwo + sideThree >= sideOne
  )
}
