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
import avatarComment from './avatarComment.png';
import Divider from 'material-ui/Divider';

import Comment from 'material-ui/svg-icons/communication/comment';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


const image = {
    src: imageFile,
    alt: 'my image',
};

const avatarImage = {
    src: avatarComment,
    alt: 'my image',
};

injectTapEventPlugin();

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);


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
            subtitle="Серьёзный НЛП-тренер"
            avatar={image.src}
        />

        <CardMedia
        >
        </CardMedia>
        <CardTitle title="НЛП-треннинг" subtitle="Тренируем уверенность в себе" />
        <CardText>
            {text('Label', 'Я сам когда-то прошел этот путь. От неуверенного в себе человека до тренера и консультанта, за плечами которого более 400 проведенных тренингов.')}
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

const CardComment = () => (

            <Card>
                <CardHeader
                    title="Аня"
                    subtitle="Весёлая девушка"
                    avatar={avatarImage.src}
                />
                <CardText>
                    Здравствуйте. Могли бы подсказать продолжительность треннинга?
                </CardText>
                <CardActions>
                    <div style={{'display':'flex','flex-direction':'row-reverse','paddingTop':'8px'}} >
                        <Checkbox
                            checkedIcon={<ActionFavorite />}
                            style={{display:'inline-block',width:'100px'}}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            label="22"
                        />
                    </div>
                </CardActions>

            </Card>
)



const MuiTheme = (storyFn) => (
    <MuiThemeProvider>
        {storyFn()}
    </MuiThemeProvider>
);

const infoComponent = (storyFn) => {
    console.log(storyFn,`storyFn`);
    return withInfo(storyFn())

};

// withInfo('doc string about my component')(() =>
//     <Component>Click the "?" mark at top-right to view the info.</Component>
// )

storiesOf('Forms', module)
    .addDecorator(MuiTheme)
    .add('DatePicker', withInfo('DataPicker')(() => <DatePicker hintText="Controlled Date Input" autoOk={true}/>))
    .add('TextField', withInfo('TextField')(() => <TextField />))
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
    .add('CardComment',withInfo('CardComment')(()=><CardComment/>));

