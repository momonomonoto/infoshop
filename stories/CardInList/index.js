/**
 * Created by Александр on 8/6/2017.
 */
import React from 'react';
import {CardExampleWithAvatar} from '../CardExampleWithAvatar';

export const CardInList = () => (
    <div>
        <div style={{'display':'inline-block','width':'330px','vertical-align':'top','margin':'0 15px 22px 0'}}>
            <CardExampleWithAvatar/>
        </div>
        <div style={{'display':'inline-block','width':'330px','vertical-align':'top','margin':'0 15px 22px 0'}}>
            <CardExampleWithAvatar/>
        </div>
        <div style={{'display':'inline-block','width':'330px','vertical-align':'top','margin':'0 0 22px 0'}}>
            <CardExampleWithAvatar/>
        </div>
    </div>
)

