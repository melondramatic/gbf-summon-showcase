import { buildDropdownOptions, buildDisplayLink } from './utils';

describe('util tests', () => {
  describe('buildDropdownOptions tests', () => {
    it('should create an option for each item in the array provided', () => {
      const testOptions = [{ name: 'test1', value: 1 }];
      const options = buildDropdownOptions(testOptions);
      expect(options).toHaveLength(testOptions.length);
    });
  });

  describe('buildDisplayLinkTests', () => {
    it('should create a display link based on the data provided', () => {
      const testId = '12345678';
      const testName = 'testName';
      const summonState = ['2', '0', '0', '0', '0', '0', '0', '1'];
      const uncapState = ['2', '0', '0', '0', '0', '0', '0', '1'];
      const expectedResult = `/display?summons=022000000000000000000011&pid=${testId}&pname=${testName}`
      const link = buildDisplayLink(testId, testName, summonState, uncapState);
      expect(link).toEqual(expectedResult);
    })
  })
});
