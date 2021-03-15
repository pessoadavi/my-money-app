import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DashBoard from '../components/dashboard/dashBoard'
import BillingCycles from '../components/billingCycles/billingCycles'

const Routes = (props) => {
    return ( 
        <Router history={hashHistory} >
            <Route path='/' component={DashBoard}/>
            <Route path='billingCycles' component={BillingCycles}/>
            <Redirect path='*' to='/'/>
        </Router>
     );
}
 
export default Routes;