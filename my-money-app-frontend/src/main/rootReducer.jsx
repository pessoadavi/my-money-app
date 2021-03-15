import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


import DashBoardReducer from '../components/dashboard/dashBoardReducer'
import BillingCyclesReducer from '../components/billingCycles/billingCyclesReducer'
import TabReducer from '../common/tabs/tabReducer'

const rootReducer = combineReducers({

    dashboard: DashBoardReducer,
    billingCycles :BillingCyclesReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer
    
})


export default rootReducer