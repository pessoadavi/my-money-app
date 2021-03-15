import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButtom from '../../common/template/iconButtom'

import { getLlist, edit, deleteItem } from './billingCyclesActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getLlist()
    }

    renderRows() {

        const list = this.props.list || []

        return list.map(itemList => (
            <tr key={itemList._id}>
                <td>{itemList.name}</td>
                <td>{itemList.month}</td>
                <td>{itemList.year}</td>
                <td>
                    <IconButtom style='warning' icon='pencil'
                        onClick={() => { this.props.edit(itemList) }} />
                    <IconButtom style='danger' icon='trash-o'
                        onClick={() => { this.props.deleteItem(itemList) }} />
                </td>
            </tr>
        ))
    }


    render() {
        console.log(this.props.list)
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th className='table-actions' >Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.billingCycles.list
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ getLlist, edit, deleteItem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);