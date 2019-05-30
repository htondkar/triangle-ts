import Joi from '@hapi/joi';

import { Triangle, TriangleSides } from './Triangle.model';

export const TriangleValidations = {
  hasAllTheSides(triangle: Partial<Triangle>): triangle is Triangle {
    const { error } = Joi.validate(triangle, this.getTriangleValidationSchema())
    return error === null ? true : false
  },

  /**
   * @method passesTriangleInequalityTheoremTest is a litmus test to determine is it's
   * mathematically possible and valid to form a triangle with the input values. for mor info
   * @see {@link https://en.wikipedia.org/wiki/Triangle_inequality}
   */
  passesTriangleInequalityTheoremTest({ sideOne, sideTwo, sideThree }: Triangle) {
    return (
      sideOne + sideTwo >= sideThree &&
      sideOne + sideThree >= sideTwo &&
      sideTwo + sideThree >= sideOne
    )
  },

  getTriangleValidationSchema() {
    const positiveNumber = Joi.number()
      .required()
      .positive()

    return Joi.object().keys({
      [TriangleSides.SIDE_ONE]: positiveNumber,
      [TriangleSides.SIDE_TWO]: positiveNumber,
      [TriangleSides.SIDE_THREE]: positiveNumber,
    })
  },
}
