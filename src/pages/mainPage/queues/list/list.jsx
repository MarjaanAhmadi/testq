import React from 'react';
import SingleQueue from "../singleQueue/singleQueue";
import {useSelector} from "react-redux";
const List = (props) => {

    const callFlows = useSelector(state => state.callFlows);

    const renderSingleQueue = () => {
        return(
            props.queues.map((queue, index) => {
                    const callFlow = callFlows.filter(
                        i => i.name === queue.name
                    )[0];
                return (
                    <SingleQueue
                                callFlow={callFlow}
                                key={index}
                                queue={queue}/>
                )
            })
        )
    };

    return(
        <div id='queues_container'>
            <div className="users-grid">
                <div className="grid-row title" >
                    <div className="grid-cell queue-name">QUEUE & STATUS</div>
                    <div className="grid-cell call-info">CALL INFO</div>
                    <div className="grid-cell agents">AGENTS</div>
                </div>
                <div className="user-rows">
                    {renderSingleQueue()}
                </div>
            </div>

        </div>
    )
};
export default List;
