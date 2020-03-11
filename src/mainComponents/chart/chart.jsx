import React, {useEffect, useState} from 'react';
import C3Chart from 'react-c3js';
import {useDispatch, useSelector} from "react-redux";
import './chart.css';
const Chart = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const [data, setData] = useState({
        columns: [],
        type : 'pie',
        colors: {
            'Handled Calls': 'rgb(70, 208, 50)',
            'Missed Calls' : 'rgb(242, 16, 16)'
        },
        tooltip: { format: { value: function (value, ratio, id) { return (value).formatSomehow(); } } }
    });
    const getBaseBalanceInfo = async () => {
        dispatch({loading:true, type: 'SHOW_LOADING'})

        try {
            //request to get list
            //change main numbers state
            setData({
                ...data,
                columns: [
                    ['Missed Calls', 10],
                    ['Handled Calls', 40]
                ]
            })
        }
        catch (e) {
            console.log(e)
        }
        dispatch({loading:false, type: 'SHOW_LOADING'})


    };
    useEffect(() => {
        getBaseBalanceInfo();
    },[])
    return(

        <C3Chart pie={true} data={data} />
    )
}
export default Chart;
