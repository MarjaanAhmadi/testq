import React from 'react';
import Users from "./users/users";
import axiosInstance from "../../../../../../../routing/axios";
import {useSelector} from "react-redux";

const UserList = (props) => {
    return(
        <React.Fragment>
            <Users queueId={props.queueId} updateList={() => {props.updateList()}} user={true} users={props.users}/>
        </React.Fragment>
    )
};
export default UserList;
