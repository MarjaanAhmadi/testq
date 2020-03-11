import React,{useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import axiosInstance from "../../../../../../routing/axios";

const SingleMember = (props) => {

    const agents = useSelector(state => state.agents);
    const [specificAgentStatus, setSpecificAgentStatus] = useState('ready');


    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        id: ''
    });
    const setData = async () => {
        try {
            const roster = props.roster.list.filter(i => i === props.member)[0];
            console.log('roster',roster);

            const agent = agents.filter(i => i.id === roster)[0];
            setInfo({
                ...info,
                firstName: agent.first_name,
                lastName: agent.last_name,
                id: agent.id
            });
            const response = await axiosInstance.get(`/agents/${agent.id}/status`);
            setSpecificAgentStatus(response.data.data);
        }
        catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        setData();
    },[]);
    return(
        <div className="grid-row">
            <div className="user-cells item-desc items">
                <div className="agent-name grid-cell">
                        {info.firstName} {info.lastName}
                </div>

                <div className="agents grid-cell chips-cell custom">
                    <div className={`${specificAgentStatus === 'logged_out' || specificAgentStatus === 'outbound' ?
                        'chips-status-logout' :
                        'chips-status-login'
                    } q-center-chips table-chips`}>
                        {specificAgentStatus}
                    </div>
                </div>

                <div className="call-info grid-cell" data-type="numbers">
                    test
                </div>
            </div>
            <div className="edit-user"></div>
        </div>
    )
};
export default SingleMember;
