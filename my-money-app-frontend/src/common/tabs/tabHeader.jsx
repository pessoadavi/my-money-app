import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab } from './tabActions'
import If from '../operador/if'

class TabHeader extends Component {

    render() {
        const { target, icon, label } = this.props
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[target]

        return (
            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    <a onClick={() => this.props.selectTab(target)}
                        href='javascript:;'
                        data-toggle='tab'
                        data-target={target}>
                        <i className={`fa fa-${icon}`} ></i> <span>{label}</span>
                    </a>
                </li>
            </If>

        );
    }
}

const mapStateToProps = (state) => ({
    tab: state.tab
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ selectTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);