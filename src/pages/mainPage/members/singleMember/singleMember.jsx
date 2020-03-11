import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axiosInstance from "../../../../routing/axios";

const SingleMember = (props) => {

    const queues = useSelector(state => state.queues);
    const [memberInQueue, setMemberInQueue] = useState({list: []});
    const [specificAgentStatus, setSpecificAgentStatus] = useState('ready');


    const setQueueMembers = () => {
        if(props.memberQueues.length > 0)
        {
            let list = memberInQueue.list;


            props.memberQueues.forEach((item) => {
                const queue = queues.filter(i => i.id === item )[0];
                if(queue!== undefined)
                list.push(queue);
            });
            setMemberInQueue({
                ...memberInQueue,
                list: list
            });
        }
    };

    const getSpecificAgentStatus = async () => {
        const response = await axiosInstance.get(`/agents/${props.member.id}/status`);

        setSpecificAgentStatus(response.data.data);
    };

    useEffect(() => {
        setQueueMembers();
        getSpecificAgentStatus();
    },[]);

    return(
        <div className="grid-row" data-id="df0dd13da775ea6b1326646eec3890e6" data-priv_level="admin"
             data-name="Account Admin" data-search="Account Admin">
            <div className="user-cells items">
                <div className="queue-name grid-cell" data-type="name">
                        <div>
                            {props.member.first_name} {props.member.last_name}
                        </div>
                </div>
                <div className="agents grid-cell chips-cell">
                    <div className={`${specificAgentStatus === 'logged_out' || specificAgentStatus === 'outbound' ?
                                            'chips-status-logout' :
                                            'chips-status-login'
                                        } q-center-chips table-chips`}>
                        {specificAgentStatus}
                    </div>
                </div>
                <div className="call-info grid-cell" data-type="numbers">
                    {

                        memberInQueue.list.length > 0 ?
                        memberInQueue.list.map((item , index) =>{
                            return (<span>{item.name}, </span>)
                        } )
                            : 'No queues'
                    }
                </div>
            </div>
            <div className="edit-user"></div>
        </div>
    )
};
export default SingleMember;
