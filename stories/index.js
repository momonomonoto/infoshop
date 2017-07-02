import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Welcome from './Welcome';
import Hello from './Hello';
import Button from './Button';

injectTapEventPlugin();


const MuiTheme = (storyFn) => (
    <MuiThemeProvider>
        {storyFn()}
    </MuiThemeProvider>
);



storiesOf('Forms', module)
    .addDecorator(MuiTheme)
    .add('DatePicker', () => <DatePicker hintText="Controlled Date Input" autoOk={true}/>)
    .add('TextField', () => <TextField />)
    .add('NumbertField', () => <TextField type="number" />)
    .add('Checkbox', () =>
        <div>
            <Checkbox label="One" />
            <Checkbox label="Two" />
            <Checkbox label="Three" />
            <Checkbox label="Four" />
        </div>)
    .add('RadioButton', () =>
        <div>
            <RadioButtonGroup name="shipName" defaultSelected="community">
                <RadioButton
                    value="One"
                    label="One"
                />
                <RadioButton
                    value="Two"
                    label="Two"
                />
                <RadioButton
                    value="Three"
                    label="Three"
                />
            </RadioButtonGroup>
        </div>)

storiesOf('Goods', module)
    .addDecorator(MuiTheme)
    .add('AppBar', () => <Hello />);


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
