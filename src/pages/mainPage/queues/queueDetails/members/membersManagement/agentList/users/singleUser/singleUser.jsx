import React,{useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import axiosInstance from "../../../../../../../../../routing/axios";

const SingleUser = (props) => {
    const [count, setCount] = useState(0);
    const [queueRosters, setQueueRosters] = useState({list: []});
    const getQueueNumber = async () => {
        const queueNumber = await axiosInstance.get(`/agents/${props.info.id}/`);
        setCount(queueNumber.data.data.queues.length);
    };

    const assignToQueue = async (id) => {
        debugger
        try {
            const response = await axiosInstance.get(`/queues/${props.queueId}/roster`);
            debugger
            let rosters = response.data.data;
            props.user
                ?  rosters.push(id)
                : rosters = rosters.filter(i => i !== id)
            try {
                const res = await axiosInstance.post(`/queues/${props.queueId}/roster`,{data: rosters});
                props.updateList();
            }
            catch (e) {
                console.log(e);
            }


        }
        catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        getQueueNumber();
    },[]);
    return(
        <div className="grid-row">
            <div className="user-cells item-desc items">
                <div className="agent-name grid-cell">
                    <div>
                        {props.info.first_name} {props.info.last_name}
                    </div>
                </div>
                <div className="agents grid-cell" data-type="call-infos">{count}<i
                    className="icon-telicon-multiple-items"></i></div>
                <div className="call-info grid-cell" data-type="numbers">
                    <button onClick={() => {assignToQueue(props.info.id)}} className='btn btn-primary'>
                        {props.user ? 'Assign' : 'Un-assign'}
                    </button>
                </div>
            </div>
            <div className="edit-user"></div>
        </div>
    )
};
export default SingleUser;
