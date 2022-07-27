import React, { Component } from "react"
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from "../common/tab/tabs"
import TabsHeader from "../common/tab/tabsHeader"
import TabsContent from "../common/tab/tabsContent"
import TabHeader from "../common/tab/tabHeader"
import TabContent from '../common/tab/tabContent'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { selectTab, showTabs } from "../common/tab/tabActions"
import { TAB_LIST, TAB_CREATE, TAB_UPDATE, TAB_DELETE } from "../common/consts/tabs"
import BillingCycleList from "./billingCycleList"
import BillingCycleForm from "./billingCycleForm"
import { create, update, remove } from './billingCycleActions'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab(TAB_LIST)
        this.props.showTabs(TAB_LIST, TAB_CREATE)
    }

    render() {

        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>

                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target={TAB_LIST} />
                            <TabHeader label='Incluir' icon='plus' target={TAB_CREATE} />
                            <TabHeader label='Alterar' icon='pencil' target={TAB_UPDATE} />
                            <TabHeader label='Excluir' icon='trash-o' target={TAB_DELETE} />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id={TAB_LIST}>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id={TAB_CREATE}>
                                <BillingCycleForm
                                    onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary'
                                />
                            </TabContent>
                            <TabContent id={TAB_UPDATE}>
                                <BillingCycleForm
                                    onSubmit={this.props.update}
                                    submitLabel='Alterar'
                                    submitClass='info'
                                />
                            </TabContent>
                            <TabContent id={TAB_DELETE}>
                                <BillingCycleForm
                                    onSubmit={this.props.remove}
                                    submitLabel='Excluir'
                                    submitClass='danger'
                                    readOnly={true}
                                />
                            </TabContent>
                        </TabsContent>

                    </Tabs>
                </Content>
            </div>
        )

    }

}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { selectTab, showTabs, create, update, remove },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(BillingCycle)