/**
 * Created by Александр on 8/6/2017.
 */
import React from 'react';

import {IconMenuExampleSimple} from '../IconMenuExampleSimple';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Comment from 'material-ui/svg-icons/communication/comment';
import avatarComment from './simple.png';
import FlatButton from 'material-ui/FlatButton';


const avatarImage = {
    src: avatarComment,
    alt: 'my image',
};


export const CardExampleWithAvatar = () => (
    <Card >
        <IconMenuExampleSimple  />
        <CardHeader
            title="Артем Иванушкин"
            subtitle="Серьёзный НЛП-тренер"
            avatar={avatarImage.src}
        />

        <CardMedia
        >
        </CardMedia>
        <CardTitle title="НЛП-треннинг" subtitle="Тренируем уверенность в себе" />
        <CardText>
            Я сам когда-то прошел этот путь. От неуверенного в себе человека до тренера и консультанта, за плечами которого более 400 проведенных тренингов.
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