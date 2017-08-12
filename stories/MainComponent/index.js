/**
 * Created by Александр on 8/12/2017.
 */
import React from 'react';
import {MenuBar} from '../MenuBar';
import {LeftMenu} from '../LeftMenu';
import {CardInList} from '../CardInList';

export const MainComponent = () => (
        <div>
            <MenuBar />
            <div style={{'display':'flex'}}>
                <LeftMenu/>
                <CardInList/>
            </div>
        </div>
)
