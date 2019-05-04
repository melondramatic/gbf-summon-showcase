import darkSummons from './summons-dark';
import earthSummons from './summons-earth';
import fireSummons from './summons-fire';
import lightSummons from './summons-light';
import miscSummons from './summons-misc';
import waterSummons from './summons-water';
import windSummons from './summons-wind';
import ISummon from '../types/ISummon';

export const ELEMENTS: Array<string> = ['fire','water','earth','wind','light','dark','misc1','misc2'];
export const SUMMONS: Array<Array<ISummon>> = [
  fireSummons,
  waterSummons,
  earthSummons,
  windSummons,
  lightSummons,
  darkSummons,
  miscSummons,
  miscSummons,
];