import React from 'react';

const IconButtom = (props) => {
    return ( 
        <button className={`btn btn-${props.style}`}
            onClick={props.onClick}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
     );
}
 
export default IconButtom;