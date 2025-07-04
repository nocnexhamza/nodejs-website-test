
import React from 'react';

import LinksGroupComponent from '../../../components/Sidebar/LinksGroup/LinksGroup'
import s from './LinksGroup.module.scss';

export const LinksGroup = (props) => (
    <div className={s.linksGroupWrapper}>
        <LinksGroupComponent {...props} />
    </div>
);
