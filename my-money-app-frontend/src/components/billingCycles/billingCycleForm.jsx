import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../../common/form/labelAndInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCyclesActions'


class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body' >
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        cols='12 4' label='Nome' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        cols='12 4' label='Mês' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        cols='12 4' label='Ano' placeholder='Informe o ano' />
                </div>
                <div className='box-footer' >
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm))