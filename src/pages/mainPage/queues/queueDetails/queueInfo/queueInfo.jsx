import React from 'react';
import i18next from "i18next";

const QueueInfo = () => {
    return(

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
    )
};
export default QueueInfo;
