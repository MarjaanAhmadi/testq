import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import i18n from './config/language/i18n';
import { Route, Switch } from 'react-router-dom';
import {withTranslation} from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';
import DefaultLayout from "./layouts/defaultLayout";
import './app.css';
import axiosInstance from "./routing/axios";

toast.configure({
    autoClose: 8000,
    draggable: false,
    //etc you get the idea
});



const App = () => {

    const dispatch = useDispatch();
    const [direction, setDirection] = useState('rtl');
    const language = useSelector(state => state.language);



    const getDirection = () => {
        language === 'per' ? setDirection('rtl') : setDirection('ltr')
    };

    const getCallFlows = async () => {
        const response = await axiosInstance.get(
            `/callflows?paginate=false`
        );
        dispatch({callFlows: response.data.data, type: 'SET_CALL_FLOWS'});
    };
    const getQueues = async () => {
        const response = await axiosInstance.get('/queues/');
        dispatch({queues: response.data.data, type: 'SET_QUEUES'});
        dispatch({searchedQueues: response.data.data, type: 'SET_SEARCHED_QUEUES'});

    };

    const getAgents = async () => {
        const response = await axiosInstance.get('/agents/');
        dispatch({list: response.data.data, type: 'SET_ALL_AGENTS'});
    }

    //when language change direction will change and dispatch to redux i18n language will change => fort future when website is multi language
    useEffect(() => {
        i18n.changeLanguage(language);
        getDirection();
    },[language]);
    useEffect(() => {
        getCallFlows();
        getQueues();
        getAgents();
    },[]);

    return (
        <div className={`App ${direction}`}>
            <React.Suspense>
                <Switch>
                       <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
                </Switch>
            </React.Suspense>

            <div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default withTranslation()(App);
