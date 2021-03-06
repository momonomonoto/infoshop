import React from 'react';
import { storiesOf,addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {MenuBar} from './MenuBar';
import{CardInList} from './CardInList';
import {CardComment} from './CardComment';
import {TableGood} from './TableGood';
import {CardExampleWithAvatar} from './CardExampleWithAvatar';
import {Orders} from './Orders';

import {LeftMenu} from './LeftMenu';
import {MainComponent} from './MainComponent';

import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

const stories = storiesOf('Storybook Knobs', module);

addDecorator(withKnobs);

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
    .add('TextField', withInfo('TextField')(() => <RaisedButton label={text('Label', 'Hello Button')}  />))
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
                    label={text('Button label','Helo button')}
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
    .add('MenuBar', withInfo('MenuBar')(() => <MenuBar />))
    .add('SimpleCard',withInfo('CardExampleWithAvatar')(()=><CardExampleWithAvatar/> ))
    .add('CardInList',withInfo('CardInList')(()=><CardInList/> ))
    .add('TableGood',withInfo('TableGood')(()=><TableGood/> ))
    .add('MainComponent',withInfo('MainComponent')(()=><MainComponent/> ))
    .add('Orders',withInfo('Orders')(()=><Orders/> ))
    .add('LeftMenu',withInfo('LeftMenu')(()=><LeftMenu/> ))
    .add('CardComment',withInfo('CardComment')(()=><CardComment/>));
