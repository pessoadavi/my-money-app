import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tabs/tabs'
import TabsHeader from '../../common/tabs/tabsHeader'
import TabsContent from '../../common/tabs/tabsContent'
import TabHeader from '../../common/tabs/tabHeader'
import TabContent from '../../common/tabs/tabContent'
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'

import { selectTab, showTabs } from '../../common/tabs/tabActions'
import { create, update, remove } from './billingCyclesActions'

class BillingCycles extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamentos' small='Versão 1.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' target='tabList' icon='bars' />
                            <TabHeader label='Incluir' target='tabCreate' icon='plus' />
                            <TabHeader label='Alterar' target='tabUpdate' icon='pencil' />
                            <TabHeader label='Excluir' target='tabDelete' icon='trash-o' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleForm onSubmit={this.props.create} 
                                    submitClass={'primary'} submitLabel={'Salvar'}/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm onSubmit={this.props.update} 
                                    submitClass={'info'} submitLabel={'Atualizar'}/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BillingCycleForm onSubmit={this.props.remove}  
                                    submitClass={'danger'} submitLabel={'Excluir'} readOnly={true}/>                            
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycles);