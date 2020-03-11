import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import routes from '../routing/routes';
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import './defaultLayout.css';

const DefaultLayout = () => {
    const showNav = useSelector(state => state.showNav)
    const dispatch = useDispatch()

    const loading = () => {
        console.log('loading')
    }

    return(
        <React.Fragment>
            <Sidebar/>
                <div className='right-side-header'>
                    <div className='content'>
                        <div className='content-main'>
                            <Header />
                            <div className='container-fluid'>
                                <React.Suspense fallback={loading}>

                                    <Switch>
                                        {
                                            routes.map((route, idx) => {
                                                return route.component ? (
                                                    <Route
                                                        key={idx}
                                                        path={route.path}
                                                        exact={route.exact}
                                                        name={route.name}
                                                        render={props => (
                                                            <route.component {...props} />
                                                        )} />
                                                ) : (null);
                                            })}
                                    </Switch>
                                </React.Suspense>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default DefaultLayout;
