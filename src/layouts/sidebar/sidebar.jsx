import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withTranslation} from "react-i18next";
import {Link, useHistory} from "react-router-dom";
import './sidebar.css';
import routes from "../../routing/routes";
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faFile,
    faCreditCard,
    faSearch,
    faDownload,
    faList
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faFile,
    faCreditCard,
    faSearch,
    faDownload,
    faList
)


const Sidebar = ({t}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const showNav = useSelector(state => state.showNav)
    const renderRoutes = () => {
        return(
            routes.map((route) => {
                if(route.child === false)
                return(
                    <React.Fragment key={route.path}>
                        <Link to={route.path}>
                                        <span className={`icon-color ${history.location.pathname === route.path ? 'active-icon' : ''}`}>
                                        <i className={`fa ${route.metaData.icon} menu-icon selected`}></i>
                                    </span>
                        </Link>
                        <hr/>
                    </React.Fragment>
                )
            })
        )
    };
    return(
        <div id="mySidebar" className={`left-side sidebar shadow bg-white rounded ${showNav ? 'show-width' : ''}`}>
           <div className='sidebar-items'>
               {renderRoutes()}
           </div>
        </div>
    )
};
export default withTranslation()(Sidebar);
