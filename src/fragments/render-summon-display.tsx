import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { ParsedQuery } from 'query-string';
import { RouteComponentProps } from 'react-router-dom'

import uncapLevels from '../constants/uncap-levels';
import ISummon from '../types/ISummon';
import styles from './render-summon-display-styles';

const useStyles = makeStyles(styles);

interface IDisplaySummon extends ISummon {
  uncap: number,
}

export const displaySummons = (summons: Array<ReactElement>, query: ParsedQuery, routeProps: RouteComponentProps) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.summonsContainer}>
        <div className={classes.medContainer}>
          <div className={classes.displayRow}>
            {summons[0]}
            {summons[1]}
          </div>
          <div className={classes.displayRow}>
            {summons[2]}
            {summons[3]}
          </div>
        </div>
        <div className={classes.medContainer}>
          <div className={classes.displayRow}>
            {summons[4]}
            {summons[5]}
          </div>
          <div className={classes.miscSummonRow}>
            {summons[6]}
            {summons[7]}
          </div>
        </div>
      </div>
      <div className={classes.miscAndInfoContainer}>
        <div className={classes.miscSummonRowLg}>
          {summons[6]}
          {summons[7]}
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.playerInfoContainer}>
            <Typography variant={'h5'}>{`Player ID: ${query.pid || ''}`}</Typography>
            <Typography variant={'h5'}>{`Player Name: ${query.pname || ''}`}</Typography>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              color={'primary'}
              disableRipple={true}
              onClick={() => window.open(`http://game.granbluefantasy.jp/#profile/${query.pid}`, '_blank')}
              variant={'contained'}
            >
              Player Profile
            </Button>
            <Button
              className={classes.button}
              color={'primary'}
              disableRipple={true}
              onClick={() => routeProps.history.push('/')}
              variant={'contained'}
            >
              Back to Selection
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const generateSummons = (summons: IDisplaySummon[]) => {
  const classes = useStyles();
  const renderedSummons = summons.map((summon) => {
    const updatedArt = (summon.has4UncapArt && summon.uncap > 1) || (summon.has5UncapArt && summon.uncap > 2) ? '_02' : '';
    const summonUrl = `http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/summon/party_main/${summon.gbfId}${updatedArt}.jpg`;
    const uncapShadow = uncapLevels[summon.uncap].shadowColor;
    const uncapStyle = {
      color: uncapLevels[summon.uncap].color,
      textShadow: `
        0px 0px 1px ${uncapShadow}, 0px 0px 2px ${uncapShadow}, 0px 0px 3px ${uncapShadow},
        0px 0px 1px ${uncapShadow}, 0px 0px 2px ${uncapShadow}, 0px 0px 3px ${uncapShadow},
        0px 0px 1px ${uncapShadow}, 0px 0px 2px ${uncapShadow}, 0px 0px 3px ${uncapShadow}
      `,
    }
    return (
      <div className={classes.summonContainer}>
        <img className={classes.image} src={summonUrl} />
        <div className={classes.summonInfoContainer}>
          <Typography style={uncapStyle} variant={'h6'}>{uncapLevels[summon.uncap].name}</Typography>
          <Typography variant={'h6'}>{summon.name}</Typography>
        </div>
      </div>
    );
  });
  return renderedSummons;
}

export default (summons: IDisplaySummon[], query: ParsedQuery, routeProps: RouteComponentProps) =>
  displaySummons(generateSummons(summons), query, routeProps);