import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosInstance from "../../../../routing/axios";
import {useSelector} from "react-redux";
import QueueInfo from "./queueInfo/queueInfo";
import AgentsQueueInfo from "./agentsQueueInfo/agentsQueueInfo";
import CallsInQueue from "./callsInQueue/callsInQueue";
import Members from "./members/members";
import MembersManagement from "./members/membersManagement/membersManagement";
const QueueDetails = (props) => {

    const callFlows = useSelector(state => state.callFlows);
    const history = useHistory();
    const [queue, setQueue] = useState({item: {}});
    const [manageSelected, setManageSelected] = useState(true);

    const [extension, setExtension] = useState({list: []});
    const [selectedTab, setSelectedTab] = useState('members')
    const getQueueDetails = async () => {
        const response = await axiosInstance.get(`/queues/${props.match.params.id}`);
        setQueue({
            ...queue,
            item: response.data.data
        });

    };


    const renderExtensions = () => {
        const ext = callFlows.filter(i=> i.name === queue.item.name);
        if(ext.length > 0){
            if('numbers' in ext[0])
                return ext[0].numbers.map((num, index) => {
                    return(
                        <React.Fragment>
                            <span className='num' key={index}>{num}, </span>
                            <br/>
                        </React.Fragment>

                    )
                })
        }
    };

    const manageButtonSelected = () => {

        manageSelected ?
            setManageSelected(false)
            : setManageSelected(true)
    };

    useEffect(() => {
        getQueueDetails();
    },[]);

    return(
        <React.Fragment>
            <h4>
                <i onClick={() => {history.push('/')}} className='fa fa-arrow-left'></i>
                Queue Details
            </h4>
            <br/>
            <h4>{queue.item.name}</h4>
            <br/>
            <span className='queue-extensions'><h5>Extensions: </h5> {renderExtensions()}</span>
                <div id='queues_container'>
                    <div className="users-grid">
                        <div className="user-rows">
                            <div className='grid-row'>
                                <div className="user-cells item-desc queue-details items">

                                    <QueueInfo/>
                                    <AgentsQueueInfo/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-box clearfix">
                        <div id="box_spare_numbers" className={`half-box pull-right ${selectedTab === 'calls' ? 'selected' : ''}`} data-type="spare"
                            onClick={() => {setSelectedTab('calls')}}
                        ><span
                            className="title">calls in queue</span><span className="count"></span>
                        </div>
                        <div id="box_used_numbers" className={`half-box pull-left ${selectedTab === 'members' ? 'selected' : ''}`}
                             onClick={() => {setSelectedTab('members')}}
                        ><span
                            className="title">members</span><span className="count">  </span><i className="help-popover fa fa-question" data-toggle="tooltip" data-placement="bottom" data-original-title="در این قسمت سرشماره های اختصاص داده شده نشان داده می‌شوند"></i>
                        </div>
                        {
                            selectedTab === 'calls' ?
                                <CallsInQueue/>
                                :
                                manageSelected ? <Members manageButtonSelected={manageButtonSelected} id={props.match.params.id}/>
                                : <MembersManagement manageButtonSelected={manageButtonSelected} id={props.match.params.id}/>
                        }
                    </div>

                </div>
        </React.Fragment>
    )
};
export default QueueDetails;
