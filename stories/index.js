import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';

import Button from './Button';
import Welcome from './Welcome';
import Hello from './Hello';



const MuiTheme = (storyFn) => (
    <MuiThemeProvider>
        {storyFn()}
    </MuiThemeProvider>
);


storiesOf('Hello', module)
    .addDecorator(MuiTheme)
    .add('simple Hello', () => <Hello />);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
