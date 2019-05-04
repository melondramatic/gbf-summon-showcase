import IDropdownOption from './IDropdownOption';

export default interface ISummon extends IDropdownOption {
  gbfId: string,
  has4UncapArt: boolean,
  has5UncapArt: boolean,
}
