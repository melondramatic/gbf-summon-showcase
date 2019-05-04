import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/'

import theme from './theme';
import renderFooter from './fragments/render-footer';
import SelectionView from './views/selection-view';
import DisplayView from './views/display-view';

export default () => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <BrowserRouter>
        <Route exact path={'/'} component={SelectionView} />
        <Route path={'/display'} component={DisplayView} />
        {renderFooter()}
      </BrowserRouter>
    </ThemeProvider>
  )
}