import React from 'react';
import SingleMember from "../singleMember/singleMember";
const List = (props) => {


    const renderSingleMember = () => {
        return(
            props.members.map((member, index) => {
                return (
                    <SingleMember
                                memberQueues={member.queues}
                                key={index}
                                member={member}/>
                )
            })
        )
    };

    return(
        <div id='queues_container'>
            <div className="users-grid">
                <div className="grid-row title" >
                    <div className="grid-cell queue-name">MEMBER</div>
                    <div className="grid-cell agents">STATUS</div>
                    <div className="grid-cell call-info">ASSIGNED QUEUES</div>
                </div>
                <div className="user-rows">
                    {renderSingleMember()}
                </div>
            </div>

        </div>
    )
};
export default List;
