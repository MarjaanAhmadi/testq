import React, {useState, useEffect} from 'react';
import i18next from "i18next";
import InputSearch from "../../../mainComponents/inputSearch";
import List from "./list/list";
import {useDispatch, useSelector} from "react-redux";

const Members = () => {

    const [searchedMembers, setSearchedMembers] = useState({list: []});
    const members = useSelector(state => state.agents);
    const getMembers = async () => {
        setSearchedMembers({
            ...searchedMembers,
            list: members
        });
    };

    const search = async (txt) => {
        if(txt !== ''){
            const list = members.filter((item, index) =>{
                if(item.first_name.includes(txt) || item.last_name.includes(txt)) return item;
            });
            setSearchedMembers({
                ...searchedMembers,
                list: list
            });
        }
        else {
            setSearchedMembers({
                ...searchedMembers,
                list: members
            });
        }
    };
    useEffect(() => {
        getMembers();
    },[]);
    return(
        <React.Fragment>
            <h4>{i18next.t('Members')} ({members.length})</h4>
            <div className='row'>
                <div className="form-inline">
                    <div className='pull-left'>
                        <label>Sorted by: </label>
                        <select>
                            <option
                                data-option-array-index="0">
                                default
                            </option>
                            <option data-option-array-index="1">+98 938 520 0818</option>
                            <option data-option-array-index="2">+98 919 807 4426</option>
                            <option data-option-array-index="3">+98 912 503 5499</option>
                            <option data-option-array-index="4">+98 912 503 5496</option>
                            <option data-option-array-index="5">+98 912 503 5491</option>
                            <option data-option-array-index="6">+98 21 9107 7777</option>
                            <option data-option-array-index="7">+98 21 9107 7776</option>
                        </select>
                    </div>

                    <InputSearch search={async (txt) => {await search(txt)}} placeHolder='Search Member Name ...'/>


                </div>

            </div>
            <List members={searchedMembers.list}/>

        </React.Fragment>
    )
};
export default Members;
