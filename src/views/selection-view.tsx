import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import renderSummonSelection from '../fragments/render-summon-selection'
import { makeStyles } from '@material-ui/styles';

const styles = {
  container: {
    margin: '2rem',
  }
}

const useStyles = makeStyles(styles);

export default (routeProps: RouteComponentProps) => {
  const [darkSummon, setDarkSummon] = useState('0');
  const [earthSummon, setEarthSummon] = useState('0');
  const [fireSummon, setFireSummon] = useState('0');
  const [lightSummon, setLightSummon] = useState('0');
  const [waterSummon, setWaterSummon] = useState('0');
  const [windSummon, setWindSummon] = useState('0');
  const [miscSummon1, setMiscSummon1] = useState('0');
  const [miscSummon2, setMiscSummon2] = useState('0');

  const [darkUncap, setDarkUncap] = useState('0');
  const [earthUncap, setEarthUncap] = useState('0');
  const [fireUncap, setFireUncap] = useState('0');
  const [lightUncap, setLightUncap] = useState('0');
  const [waterUncap, setWaterUncap] = useState('0');
  const [windUncap, setWindUncap] = useState('0');
  const [miscUncap1, setMiscUncap1] = useState('0');
  const [miscUncap2, setMiscUncap2] = useState('0');

  const [playerId, setPlayerId] = useState('');
  const [playerName, setPlayerName] = useState('');

  const summonState = [fireSummon, waterSummon, earthSummon, windSummon, lightSummon, darkSummon, miscSummon1, miscSummon2];
  const summonHooks = [setFireSummon, setWaterSummon, setEarthSummon, setWindSummon, setLightSummon, setDarkSummon, setMiscSummon1, setMiscSummon2];
  const uncapState = [fireUncap, waterUncap, earthUncap, windUncap, lightUncap, darkUncap, miscUncap1, miscUncap2];
  const uncapHooks = [setFireUncap, setWaterUncap, setEarthUncap, setWindUncap, setLightUncap, setDarkUncap, setMiscUncap1, setMiscUncap2];

  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      {renderSummonSelection(
        playerId,
        playerName,
        routeProps,
        setPlayerId,
        setPlayerName,
        summonHooks,
        summonState,
        uncapHooks,
        uncapState,
      )}
    </div>
  )
}
