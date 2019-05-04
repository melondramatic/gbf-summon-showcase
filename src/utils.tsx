import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { ParsedQuery } from 'query-string';

import { SUMMONS } from './constants/summon-constants'
import IDropdownOption from './types/IDropdownOption';

export const buildDropdownOptions = (optionsArray: Array<IDropdownOption>) => {
  const options = [];
  for (const item of optionsArray) {
    const option = <MenuItem disabled={item.value === 999} value={item.value} key={item.value}>{item.name}</MenuItem>
    options.push(option);
  };
  return options;
};

export const buildDisplayLink = (
  playerId: string,
  playerName: string,
  summonState: Array<string>,
  uncapState: Array<string>,
) => {
  const summons = summonState.map((summonItem, index) => {
    const summonValue = SUMMONS[index][parseInt(summonItem)].value;
    const summon = summonValue < 9 ? `0${summonValue}` : summonValue;
    return (
      [`${summon}`, uncapState[index]].join('')
    );
  });
  return (
    `/display?summons=${summons.join('')}&pid=${playerId}&pname=${playerName}`
  );
};

export const parseSummonData = (query: ParsedQuery) => {
  if (!query.summons || query.summons.length !== 24) {
    return null;
  }

  const data = [];
  for (let i = 0; i < query.summons.length; i += 3) {
    const entry = query.summons.slice(i, i+3);
    data.push(entry)
  }

  const summons = data.map((entry, index) => {
    const summon = parseInt(entry.slice(0,2).toString());
    const uncap = parseInt(entry[2]);
    return {...SUMMONS[index][summon], uncap }
  })

  return summons;
}