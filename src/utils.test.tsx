import { buildDropdownOptions, buildDisplayLink, parseSummonData } from './utils';

describe('util tests', () => {
  describe('buildDropdownOptions tests', () => {
    it('should create an option for each item in the array provided', () => {
      const testOptions = [{ name: 'test1', value: 1 }];
      const options = buildDropdownOptions(testOptions);
      expect(options).toHaveLength(testOptions.length);
    });
  });

  describe('buildDisplayLink tests', () => {
    it('should create a display link based on the data provided', () => {
      const testId = '12345678';
      const testName = 'testName';
      const summonState = ['2', '0', '0', '0', '0', '0', '0', '1'];
      const uncapState = ['2', '0', '0', '0', '0', '0', '0', '1'];
      const expectedResult = `/display?summons=022000000000000000000011&pid=${testId}&pname=${testName}`
      const link = buildDisplayLink(testId, testName, summonState, uncapState);
      expect(link).toEqual(expectedResult);
    });
  });

  describe('parseSummonData tests', () => {
    it('should return null if the query does not contain a summons property', () => {
      const testQuery = {};
      const data = parseSummonData(testQuery);
      expect(data).toBe(null);
    });

    it('should return null if thequery summons property has an incorrect length', () => {
      const testQuery = { summons: '1' };
      const data = parseSummonData(testQuery);
      expect(data).toBe(null);
    });

    it('should return a list of summons parsed from the query', () => {
      const testQuery = { summons: '000000000000000000000000'}
      const data = parseSummonData(testQuery);
      expect(data).toHaveLength(8);
      expect(data[1].name).toEqual('Leviathan Omega');
    });
  });
});
