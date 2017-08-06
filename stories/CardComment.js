/**
 * Created by Александр on 8/6/2017.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import imageFile from './simple.png';
import avatarComment from './avatarComment.png';

const avatarImage = {
    src: avatarComment,
    alt: 'my image',
};


export const CardComment = () => (
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