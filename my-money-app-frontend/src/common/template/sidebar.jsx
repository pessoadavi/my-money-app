import React from 'react'

import Menu from './menu'

const SideBar = (props) => {
    return ( 
        <aside className='main-sidebar'>
            <section className='sidebar'>
                <Menu/>
            </section>
        </aside>
     );
}
 
export default SideBar;