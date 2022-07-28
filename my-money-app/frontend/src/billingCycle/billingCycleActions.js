import axios from 'axios'
import { BILLING_CYCLES_FETCHED } from '../common/consts/actionsType'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import { FORM_BILLING_CYCLE } from '../common/consts/forms'
import { TAB_CREATE, TAB_DELETE, TAB_LIST, TAB_UPDATE } from '../common/consts/tabs'

const INITIAL_VALUES = { credits: [{}], debts: [{}] }
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const response = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: BILLING_CYCLES_FETCHED,
        payload: response
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function showUpdate(billingCycle) {
    return [
        showTabs(TAB_UPDATE),
        selectTab(TAB_UPDATE),
        initialize(FORM_BILLING_CYCLE, billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs(TAB_DELETE),
        selectTab(TAB_DELETE),
        initialize(FORM_BILLING_CYCLE, billingCycle)
    ]
}

export function init() {
    return [
        showTabs(TAB_LIST, TAB_CREATE),
        selectTab(TAB_LIST),
        getList(),
        initialize(FORM_BILLING_CYCLE, INITIAL_VALUES)
    ]
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(_ => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(error => {
                error.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}