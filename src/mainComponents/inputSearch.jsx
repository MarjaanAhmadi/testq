import React, {useState} from 'react';

const InputSearch = (props) => {
    const[txt, setTxt] = useState('')
    return(
        <div className="input-append pull-right search-custom">
            <input className="span2 q-center-input"
                   type="text"
                   placeholder={props.placeHolder}
                   value={txt}
                   onChange={(event) => {
                       setTxt(event.target.value)
                   }}/>
            <button className="monster-button monster-button-success non-fixed search-numbers"
                    type="button"
                    onClick={() => {props.search(txt)}}
            >
                <i
                    className="fa fa-search q-center-icon"></i>
            </button>
        </div>
    )
};
export default InputSearch;
