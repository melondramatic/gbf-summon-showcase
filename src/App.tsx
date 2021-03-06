import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/'

import theme from './theme';
import renderFooter from './fragments/render-footer';
import SelectionView from './views/selection-view';
import DisplayView from './views/display-view';

export default () => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path={'/'} component={SelectionView} />
        <Route path={'/display'} component={DisplayView} />
        {renderFooter()}
      </HashRouter>
    </ThemeProvider>
  )
}