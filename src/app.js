import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/index.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Main />
    </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));