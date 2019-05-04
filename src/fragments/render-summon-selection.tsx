import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router';

import Select from '../components/select';
import { ELEMENTS, SUMMONS } from '../constants/summon-constants';  
import uncapLevels from '../constants/uncap-levels';
import { buildDropdownOptions, buildDisplayLink } from '../utils';

import styles from './render-summon-selection-styles';

const useStyles = makeStyles(styles);

const buildDropdowns = (
  summonHooks: Array<React.Dispatch<React.SetStateAction<string>>>,
  summonState: Array<string>,
  uncapHooks: Array<React.Dispatch<React.SetStateAction<string>>>,
  uncapState: Array<string>,
) => {
  const classes = useStyles();
  const dropdowns = ELEMENTS.map((element, index) => {
     return (
       <div key={`section-${element}`} className={classes.selectionRow}>
         <Typography className={classes.elementLabel} variant={'h6'}>{element}</Typography>
         <div>
          <Select
            classname={classes.uncapSelector}
            onChange={uncapHooks[index]}
            value={uncapState[index]}
            options={buildDropdownOptions(uncapLevels)}
            formText={'Uncap'}
          />
          <Select
            classname={classes.summonSelector}
            onChange={summonHooks[index]}
            value={summonState[index]}
            options={buildDropdownOptions(SUMMONS[index])}
            formText={'Summon'}
          />
         </div>
       </div>
     );
   });
   return dropdowns;
 };

 export default (
  playerId: string,
  playerName: string,
  routeProps: RouteComponentProps,
  setPlayerId: React.Dispatch<React.SetStateAction<string>>,
  setPlayerName: React.Dispatch<React.SetStateAction<string>>,
  summonHooks: Array<React.Dispatch<React.SetStateAction<string>>>,
  summonState: Array<string>,
  uncapHooks: Array<React.Dispatch<React.SetStateAction<string>>>,
  uncapState: Array<string>,
 ) => {
  const classes = useStyles();
   return (
    <div className={classes.container}>
      <div className={classes.selectorsContainer}>
        {buildDropdowns(summonHooks, summonState, uncapHooks, uncapState)}
      </div>
      <div>
        <div className={classes.playerDataContainer}>          
          <TextField
            className={classes.playerDataField}
            label={'Player ID'}
            onChange={(event) => setPlayerId(event.target.value)}
            value={playerId} placeholder={'Player ID'}
          />
          <TextField
            className={classes.playerDataField}
            label={'Player Name'}
            onChange={(event) => setPlayerName(event.target.value)}
            value={playerName} placeholder={'Player Name'}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant={'contained'}
            color={'primary'}
            disableRipple={true}
            size={'large'}
            onClick={() => routeProps.history.push(
              buildDisplayLink(playerId, playerName, summonState, uncapState)
            )}
          >
            Generate Summon Showcase
          </Button>
        </div>
      </div>
    </div>
   )
 }