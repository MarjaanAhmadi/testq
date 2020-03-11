import React from 'react';
import i18next from "i18next";

const AgentsQueueInfo = () => {
    return(
        <div className="agents grid-cell" data-type="numbers">
            <div className='agents-item'>
                <div className='agent-items'>
                    <div className='num'>1<i className='fa fa-circle icon-answered'></i></div>
                    <div className='title'>Ready</div>
                </div>
                <div className='agent-items'>
                    <div className='num'>2<i className='fa fa-circle icon-missed'></i></div>
                    <div className='title'>Busy</div>
                </div>
                <div className='agent-items'>
                    <div className='num'>3<i className='fa fa-circle icon-waiting'></i></div>
                    <div className='title'>Waiting</div>
                </div>

            </div>
        </div>
    )
};
export default AgentsQueueInfo;
