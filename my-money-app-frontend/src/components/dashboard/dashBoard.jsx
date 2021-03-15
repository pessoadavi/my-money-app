import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'

import { getSummary } from './dashBoardActions'

class DashBoard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {

        const {credit, debt} = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' text='Proventos' color='aqua' value={credit} icon='bank' />
                        <ValueBox cols='12 4' text='Débitos' color='red' value={debt} icon='credit-card' />
                        <ValueBox cols='12 4' text='Saldo' color='green' value={credit - debt} icon='money' />
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
