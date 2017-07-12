import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import registerServiceWorker from './registerServiceWorker';
import CastReciever from './pages/CastReciever';
import createStore from './state';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore();
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <CastReciever />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
// registerServiceWorker();
