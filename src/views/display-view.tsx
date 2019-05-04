import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';

import renderSummons from '../fragments/render-summon-display';
import renderErrorScreen from '../fragments/render-error-screen';
import { parseSummonData } from '../utils';

const styles = {
  container: {
    margin: '1.5rem',
  },
}

const useStyles = makeStyles(styles);

export default (routeProps: RouteComponentProps) => {
  const classes = useStyles();
  const query =  queryString.parse(routeProps.location.search);
  const summons = parseSummonData(query)
  const errorMessage = 'There was a problem understanding the summon data. Please make sure your link is correct.'
  const viewContents = summons === null ?
    renderErrorScreen(errorMessage, routeProps, '/', 'Back to Selection') :
    renderSummons(summons, query, routeProps);

  return (
    <div className={classes.container}>
      {viewContents}
    </div>
  );
}
