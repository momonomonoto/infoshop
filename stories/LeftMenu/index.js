/**
 * Created by Александр on 8/12/2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ActionFavorite from 'material-ui/svg-icons//action/favorite';
import ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on';
import CommunicationBusiness from 'material-ui/svg-icons/places/business-center';
import Sunny from 'material-ui/svg-icons//image/wb-sunny';

const style = {
    paper: {
        display: 'inline-block',
        float: 'left',
        margin: '0px 32px 16px 0',
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
    },
};

export const LeftMenu = () => (
    <div>
        <Paper style={style.paper}>
            <Menu>
                <MenuItem primaryText="Самопознание" leftIcon={<RemoveRedEye />} />
                <MenuItem primaryText="Коммуникация" leftIcon={<PersonAdd />} />
                <MenuItem primaryText="Семья" leftIcon={<ActionPregnantWoman />} />
                <MenuItem primaryText="Отношения" leftIcon={<ActionFavorite />} />
                <MenuItem primaryText="Стрессовые ситуации" leftIcon={<ImageFlashOn />} />
                <MenuItem primaryText="Бизнес" leftIcon={<CommunicationBusiness />} />
                <MenuItem primaryText="Творчество" leftIcon={<Sunny />} />
                <Divider />
                <MenuItem primaryText="Наши друзья" leftIcon={<ContentLink />} />
            </Menu>
        </Paper>
    </div>
);
