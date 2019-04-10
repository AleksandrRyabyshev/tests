import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import SingIn from '@/components/pages/Auth/SingIn'
import SingUp from '@/components/pages/Auth/SingUp'

export default () => {
    return (
        <div className='card w-100'>
            <div className='card-header'>
                <NavLink to='/'> Sing In </NavLink>
                <NavLink to='/sing/up' className='float-right'> Sing Up </NavLink>
            </div>
            <div className='card-body'>
                <Route exact path='/' component={SingIn}/>
                <Route path='/sing/up' component={SingUp}/>
            </div>
        </div>
    )
}
