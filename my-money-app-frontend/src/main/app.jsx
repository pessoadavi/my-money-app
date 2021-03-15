import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/message/notification'

const App = (props) => {
    return (
        <div className='wrapper' >
            <Header />
            <SideBar />
            <div className='content-wrapper' >
                <Routes/>
            </div>
            <Footer/>
            <Messages/>
        </div>
    );
}

export default App;