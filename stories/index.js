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

import Hello from './Hello';
import {CardComment} from './CardComment';
import {CardExampleWithAvatar} from './CardExampleWithAvatar';

import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

injectTapEventPlugin();

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

const MuiTheme = (storyFn) => (
    <MuiThemeProvider>
        {storyFn()}
    </MuiThemeProvider>
);

const infoComponent = (storyFn) => {
    return withInfo(storyFn())
};

storiesOf('Forms', module)
    .addDecorator(MuiTheme)
    .add('DatePicker', withInfo('DataPicker')(() => <DatePicker hintText="Controlled Date Input" autoOk={true}/>))
    .add('TextField', withInfo('TextField')(() => <TextField value={text('Label', 'Hello Button')} />))
    .add('NumbertField', withInfo('NumbertField')(() => <TextField type="number" />))
    .add('Checkbox',withInfo('Checkbox')( () =>
        <div>
            <Checkbox label="One" />
            <Checkbox label="Two" />
            <Checkbox label="Three" />
            <Checkbox label="Four" />
        </div>))
    .add('RadioButton',withInfo('RadioButton')( () =>
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
        </div>))


storiesOf('Goods', module)
    .addDecorator(MuiTheme)
    .add('AppBar', withInfo('AppBar')(() => <Hello />))
    .add('SimpleCard',withInfo('CardExampleWithAvatar')(()=><CardExampleWithAvatar/> ))
    .add('CardComment',withInfo('CardComment')(()=><CardComment/>))
    .add('as dynamic variables', () => {
        const name = text('Name', 'Arunoda Susiripala');
        const age = number('Age', 89);

        const content = `I am ${name} and I'm ${age} years old.`;
        return (<div>{content}</div>);
      });
