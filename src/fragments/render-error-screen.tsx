import React from 'react';
import { RouteComponentProps } from "react-router";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const styles = {
  errorContainer: {
    textAlign: 'center' as React.CSSProperties['textAlign'],
  },
  messageContainer: {
    marginBottom: '1rem',
  }
}

const useStyles = makeStyles(styles);

export default (message: string, routeProps?: RouteComponentProps, route?: string, buttonCaption?: string) => {
  const classes = useStyles();
  return (
    <div className={classes.errorContainer}>
      <Typography className={classes.messageContainer} variant={'h5'}>{message}</Typography>
      {!!routeProps && !!route && !!buttonCaption &&
        <Button
          color={'primary'}
          onClick={() => routeProps.history.push(route)}
          variant={'contained'}
        >
          {buttonCaption}
        </Button>
      }
    </div>
  );
}