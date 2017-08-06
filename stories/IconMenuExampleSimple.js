/**
 * Created by Александр on 8/6/2017.
 */
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export const   IconMenuExampleSimple = () => (
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