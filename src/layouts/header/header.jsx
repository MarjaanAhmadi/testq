import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faLockOpen,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faLockOpen,
    faSignOutAlt
);


const Header = ({t}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () =>{
        localStorage.removeItem('admin-token');
        localStorage.removeItem('admin-user');

        const token = '';

        dispatch({token, type: 'SET_TOKEN'});
        dispatch({user: '', type: 'SET_USER'});
        history.push('/login')
    }
    return(
        <React.Fragment>
            <div className="shadow p-3 mb-5 bg-white rounded header-height">
                <div className="header-item">
                </div>

            </div>
        </React.Fragment>
    )
}
export default withTranslation()(Header);
