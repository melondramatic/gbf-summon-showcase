import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const styles = {
  footerContainer: {
    margin: '1rem',
    textAlign: 'center' as React.CSSProperties['textAlign'],
  },
};

const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  return (
    <Typography className={classes.footerContainer} variant={'body2'}>
      Granblue Fantasy content and materials are trademarks and copyrights of Cygames, Inc. or its licensors. All rights reserved.
    </Typography>
  )
}