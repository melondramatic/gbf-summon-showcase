import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  image: {
    width: '100%',
  },
  displayRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  miscSummonRow: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
    }
  },
  miscSummonRowLg: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  mainSummonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column' as React.CSSProperties['flexDirection'],
    }
  },
  medContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column' as React.CSSProperties['flexDirection'],
    }
  },
  playerInfoContainer: {
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'],
    justifyContent: 'space-evenly',
    padding: '0 2rem',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  summonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column' as React.CSSProperties['flexDirection'],
    }
  },
  summonContainer: {
    margin: '1.5rem',
    maxWidth: '8rem',
    [theme.breakpoints.down('md')]: {
      margin: '0.5rem 1rem 0 1rem',
      maxWidth: '6rem',
    },
  },
  summonInfoContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'],
    textAlign: 'center' as React.CSSProperties['textAlign'],
  },
  infoContainer: {
    display: 'flex',
  },
  miscAndInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-evenly',
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'],
    justifyContent: 'center',   
  },
  button: {
    margin: '1rem',
  }
});