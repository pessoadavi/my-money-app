import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../../common/tabs/tabActions'

const url = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export const getLlist = () => {                         // Ação de listagem

    const request = axios.get(`${url}/billingCycles`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export const create = (values) => {                     // Ação de criar
    return submit(values, 'post')
}

export const update = (itemList) => {                   // Ação de atualizar
    return submit(itemList, 'put')
}

export const remove = (itemList) => {
    return submit(itemList, 'delete')
}

function submit(itemList, method) {                     // Método genérico para criar e atualizar

    const id = itemList._id ? itemList._id : ''

    return dispatch => {                                // função com dispatch como parâmetro do thunk
        axios[method](`${url}/billingCycles/${id}`, itemList)
            .then((resp) => {
                toastr.success('Sucesso', 'Operação realizada.')
                dispatch([                              // colchetes do redux-multi
                    init()
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
                dispatch([

                ])
            })
    }
}

export const edit = (itemList) => {                     // Ação que gerencia mudança das abas quando for atualizar o obj
    return submitButton (itemList, 'tabUpdate')
}

export const deleteItem = (itemList) => {               // Ação que gerencia mudança das abas quando for deletar o ob
    return submitButton (itemList, 'tabDelete')
}

export const submitButton = (itemlist, tab) => {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize('billingCycleForm', itemlist)        // Inicializa o comp. de form com o item recebido
    ]
}

export const init = () => {                             // Ação de inicialização das abas 
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList', 'tabCreate'),
        getLlist(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}