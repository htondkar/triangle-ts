import {
    sampleEquilateralTriangle, sampleIsoclinesTriangle, sampleScaleneTriangle
} from './__fixtures__/sampleTriangles';
import { TriangleTypes } from './Triangle.model';
import { determineTriangleType } from './TriangleType.utils';

describe('TriangleType Utils', () => {
  describe('determineTriangleType', () => {
    it('should handle straight forward cases', () => {
      const eqResult = determineTriangleType(sampleEquilateralTriangle)
      const isoResult = determineTriangleType(sampleIsoclinesTriangle)
      const scResult = determineTriangleType(sampleScaleneTriangle)

      expect(eqResult).toBe(TriangleTypes.Equilateral)
      expect(isoResult).toBe(TriangleTypes.Isosceles)
      expect(scResult).toBe(TriangleTypes.Scalene)
    })

    it('should handle edge cases', () => {
      const result = determineTriangleType({ sideOne: 0, sideTwo: 0, sideThree: 0 })
      expect(result).toBe(TriangleTypes.Equilateral)
    })
  })
})
