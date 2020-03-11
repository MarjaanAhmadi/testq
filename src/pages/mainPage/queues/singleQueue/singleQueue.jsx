import React, {useState, useEffect} from 'react';
import i18next from "i18next";
import {useHistory} from 'react-router-dom';

const SingleQueue = (props) => {
    const history = useHistory();
    return(
        <div onClick={() => {history.push(`/queues/details/${props.queue.id}`)}} className="grid-row" data-id="df0dd13da775ea6b1326646eec3890e6" data-priv_level="admin"
             data-name="Account Admin" data-search="Account Admin">
            <div className="user-cells item-desc items">
                <div className="queue-name grid-cell">
                    <div className="queue-name-ext">
                        <div className='name'>
                            {props.queue.name}
                        </div>
                        {
                            props.callFlow && 'numbers' in props.callFlow ?
                                <div><span className='ext'>Ext: {props.callFlow.numbers[0]}{props.callFlow.numbers.length > 1 ? ' ,...' : ''}</span></div>
                                :
                                i18next.t('No extension')
                        }
                    </div>
                </div>
                <div className="call-info grid-cell">
                    <div className='call-info-item'>
                        <div className='items'>
                            <div className='num'>8:37<i className='fa fa-circle icon-waiting'></i></div>
                            <div className='title'>Longest wainting</div>
                        </div>
                        <div className='items'>
                            <div className='num'>3<i className='fa fa-circle icon-answered'></i></div>
                            <div className='title'>Handled</div>
                        </div>
                        <div className='items'>
                            <div className='num'>3<i className='fa fa-circle icon-missed'></i></div>
                            <div className='title'>Missed</div>
                        </div>
                        <div className='items'>
                            <div className='num'>3<i className='fa fa-circle icon-waiting'></i></div>
                            <div className='title'>Waiting</div>
                        </div>

                    </div>

                </div>
                <div className="agents grid-cell" >
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
            </div>
            <div className="edit-user"></div>
        </div>
    )
};
export default SingleQueue;
