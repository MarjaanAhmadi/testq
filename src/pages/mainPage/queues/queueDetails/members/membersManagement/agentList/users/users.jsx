import React from 'react';
import SingleUser from "./singleUser/singleUser";
const Users = (props) => {
    const renderUsers = () => {
        return(
            props.users.map((item, index) => {
                return <SingleUser queueId={props.queueId} updateList={() => {props.updateList()}} user={props.user} key={index} info={item}/>
            })
        )
    };
    return(
        <div id='queues_container' className='queue-details list'>

            <div className="users-grid member-card">
                <div className="grid-row title" >
                    <div className="grid-cell queue-name">MEMBER</div>
                    <div className="grid-cell agents">QUEUES</div>
                    <div className="grid-cell call-info"></div>
                </div>
                <div className="user-rows">
                    {renderUsers()}
                </div>
            </div>

        </div>
    )
};
export default Users;
