import React, {useState, useEffect} from 'react';
import AgentList from "./agentList/agentList";
import UserList from "./agentList/userList";
import axiosInstance from "../../../../../../routing/axios";
import {useSelector} from "react-redux";
const MembersManagement = (props) => {
    const agentsRedux = useSelector(state => state.agents);
    //objects
    const [users, setUsers] = useState({list: []});
    //ids
    const [agents, setAgents] = useState({list: []});
    const getUsers = async () => {
        try {
            const response = await axiosInstance.get('/users/');
            console.log(response.data.data.length);

            const currentAgents = await axiosInstance.get(`/queues/${props.id}/roster/`);
            let list = [];
            currentAgents.data.data.forEach((item) => {
                const agentInfo = agentsRedux.filter(i=> i.id === item)[0];
                list.push(agentInfo);
            });
            setAgents({
                ...agents,
                list: list
            });
            let tempArr = response.data.data.filter(function(item) {
                return !currentAgents.data.data.includes(item.id);
            });
            console.log('tempArr', tempArr);
            setUsers({
                ...users,
                list: tempArr
            });
        }
        catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUsers();
    },[]);
    return(
        <React.Fragment>
            <h5 className='member-details title'>Member Management</h5>

            <p>To add or remove members in this queue, select agents, then you can see your selected agents in opposite list.</p>
            <div className='manage-members-list'>
                <AgentList queueId={props.id} updateList={getUsers} users={agents.list}/>
                <UserList queueId={props.id} updateList={getUsers} users={users.list}/>
            </div>
        </React.Fragment>
    )
};
export default MembersManagement;
