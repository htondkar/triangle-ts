import { TriangleValidations } from './TriangleType.validations';

describe('TriangleType validations', () => {
  describe('hasAllTheSides', () => {
    it('shoudl handle happy path', () => {
      const result = TriangleValidations.hasAllTheSides({
        sideOne: 10,
        sideTwo: 10,
      })

      expect(result).toBe(false)
    })

    it('should not accept 0 as length', () => {
      const result = TriangleValidations.hasAllTheSides({
        sideOne: 10,
        sideTwo: 0,
        sideThree: 10,
      })

      expect(result).toBe(false)
    })

    it('should not accept NaN', () => {
      const result = TriangleValidations.hasAllTheSides({
        sideOne: NaN,
        sideTwo: 10,
        sideThree: 10,
      })

      expect(result).toBe(false)
    })
  })

  describe('passesTriangleInequalityTheoremTest', () => {
    it('should work as expected', () => {
      expect(
        TriangleValidations.passesTriangleInequalityTheoremTest({
          sideOne: 10,
          sideThree: 10,
          sideTwo: 10,
        })
      ).toBe(true)

      expect(
        TriangleValidations.passesTriangleInequalityTheoremTest({
          sideOne: 10,
          sideThree: 10,
          sideTwo: 5,
        })
      ).toBe(true)

      expect(
        TriangleValidations.passesTriangleInequalityTheoremTest({
          sideOne: 12,
          sideThree: 8,
          sideTwo: 5,
        })
      ).toBe(true)

      expect(
        TriangleValidations.passesTriangleInequalityTheoremTest({
          sideOne: 12,
          sideThree: 12,
          sideTwo: 100,
        })
      ).toBe(false)

      expect(
        TriangleValidations.passesTriangleInequalityTheoremTest({
          sideOne: 0,
          sideThree: 12,
          sideTwo: 8,
        })
      ).toBe(false)
    })
  })
})
