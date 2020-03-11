import React,{useState, useEffect} from 'react';
import Users from "./users/users";
import {useSelector} from "react-redux";

const AgentList = (props) => {
    return(
        <React.Fragment>
            <Users queueId={props.queueId} updateList={() => {props.updateList()}} user={false} users={props.users}/>
        </React.Fragment>
    )
};
export default AgentList;
