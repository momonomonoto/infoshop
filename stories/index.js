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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import imageFile from './simple.png';
import Divider from 'material-ui/Divider';

import Comment from 'material-ui/svg-icons/communication/comment';


const image = {
    src: imageFile,
    alt: 'my image',
};


injectTapEventPlugin();




const IconMenuExampleSimple = () => (
    <div>
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            style = {{'float':'right'}}
        >
            <MenuItem primaryText="Пожаловаться" />
            <MenuItem primaryText="Отзывы" />
        </IconMenu>
    </div>
);
const CardExampleWithAvatar = () => (
    <Card>
        <IconMenuExampleSimple  />
        <CardHeader
            title="Артем Иванушкин"
            subtitle="НЛП-тренер"
            avatar={image.src}
        />

        <CardMedia
        >
        </CardMedia>
        <CardTitle title="НЛП-треннинг" subtitle="Тренируем уверенность в себе" />
        <CardText>

            Я сам когда-то прошел этот путь. От неуверенного в себе человека до тренера и консультанта, за плечами которого более 400 проведенных тренингов.

            «Тренинг уверенности» — это тренинг самооценки, свободы и ответственности, самостоятельности и — в любом возрасте — зрелости и взросления. Если Вы намерены стать уверенным в себе человеком, с радостью жду Вас на этом тренинге.
        </CardText>
        <Divider  />
        <CardActions>
            <div style={{'float':'right','paddingTop':'8px'}} >
                 <Checkbox
                    checkedIcon={<ActionFavorite />}
                    style={{display:'inline-block',width:'100px'}}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    label="22"
                />
                
                <Checkbox
                    checkedIcon={<Comment />}
                    style={{display:'inline-block',width:'60px'}}
                    uncheckedIcon={<Comment />}
                    label="3"
                />
            </div>
            <FlatButton  label="Подробнее" />
        </CardActions>
    </Card>
);


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
    .add('AppBar', () => <Hello />)
    .add('SimpleCard',()=><div><CardExampleWithAvatar/></div>);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
