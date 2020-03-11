import React, {useEffect, useState} from 'react';
import SingleMember from "./singleMember/singleMember";
import axiosInstance from "../../../../../routing/axios";
import {useSelector} from "react-redux";
const Members = (props) => {


    const [roster, setRoster] = useState({list: []});
    const getMembers = async () => {
        const response = await axiosInstance.get(`/queues/${props.id}/roster/`);
        setRoster({
            ...roster,
            list: response.data.data
        });
    };
    const renderSingleMember = () => {
        return(
            roster.list.map((member, index) => {
                return (
                    <SingleMember
                        roster={roster}
                        key={index}
                        member={member}/>
                )
            })
        )


    };

    useEffect(() => {
        getMembers();
    },[])


    return(
        <div id='queues_container' className='queue-details'>
            <button className='btn btn-primary' onClick={() => {props.manageButtonSelected()}}>Manage</button>

            <div className="users-grid">
                <div className="grid-row title" >
                    <div className="grid-cell queue-name">MEMBER</div>
                    <div className="grid-cell agents">STATUS</div>
                    <div className="grid-cell call-info">CALL HANDLING</div>
                </div>
                <div className="user-rows">
                    {renderSingleMember()}
                </div>
            </div>

        </div>
    )
};
export default Members;
