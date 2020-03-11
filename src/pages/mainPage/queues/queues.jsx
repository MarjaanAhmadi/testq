import React from 'react';
import i18next from "i18next";
import InputSearch from "../../../mainComponents/inputSearch";
import List from "./list/list";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';

const Queues = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const queues = useSelector(state => state.queues);
    const searchedQueues = useSelector(state => state.searchedQueues);
    const search = async (txt) => {
        if(txt !== ''){
            const list = queues.filter((item, index) =>{
                if(item.name.includes(txt)) return item;
            });
            dispatch({searchedQueues: list, type:'SET_SEARCHED_QUEUES'});
        }
        else {
            dispatch({searchedQueues: queues, type:'SET_SEARCHED_QUEUES'});

        }
    };

    return(
        <React.Fragment>
            <div className='row'>
                <div className="form-inline">
                    <div className='pull-left'>
                        <h4><i onClick={() => {history.push('/queues/create')}} className='menu-icon selected fa fa-plus-circle'></i>{i18next.t('Queues')} ({queues.length})</h4>

                        {/*<label className='q-center-label'>Sorted by: </label>*/}
                        {/*<select>*/}
                        {/*    <option*/}
                        {/*        data-option-array-index="0">*/}
                        {/*        default*/}
                        {/*    </option>*/}
                        {/*    <option data-option-array-index="1">+98 938 520 0818</option>*/}
                        {/*    <option data-option-array-index="2">+98 919 807 4426</option>*/}
                        {/*    <option data-option-array-index="3">+98 912 503 5499</option>*/}
                        {/*    <option data-option-array-index="4">+98 912 503 5496</option>*/}
                        {/*    <option data-option-array-index="5">+98 912 503 5491</option>*/}
                        {/*    <option data-option-array-index="6">+98 21 9107 7777</option>*/}
                        {/*    <option data-option-array-index="7">+98 21 9107 7776</option>*/}
                        {/*</select>*/}
                    </div>

                    <InputSearch className='test' search={async (txt) => {await search(txt)}} placeHolder='Search Queue Name ...'/>


                </div>

            </div>
            <List queues={searchedQueues}/>

        </React.Fragment>
    )
};
export default Queues;
