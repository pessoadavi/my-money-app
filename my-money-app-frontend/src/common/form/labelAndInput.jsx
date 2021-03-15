import React from 'react';
import Grid from '../layout/grid'

// Componente de input do formulário
const LabelAndInput = (props) => {
    return ( 
        <Grid cols={props.cols}>
            <div className='form-group' >
                <label htmlFor={props.name}>{props.label}</label>
                <input className='form-control'
                {...props.input}
                placeholder={props.placeholder}
                type={props.type}
                readOnly={props.readOnly}/>
            </div>
        </Grid>
     );
}
 
export default LabelAndInput;
