import React from 'react'
import { NavLink, Route } from "react-router-dom";

import SingIn from '@/components/Auth/SingIn'
import SingUp from '@/components/Auth/SingUp'


function Home() {

    return (
        <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-8">

                    <div className="card">
                        <div className="card-header text">
                            <NavLink to="/">Sing In</NavLink>
                            <NavLink to="/sing/up" className="float-right">Sing Up</NavLink>
                        </div>
                        <div className="card-body">
                            <Route exact path="/" component={SingIn} />
                            <Route path="/sing/up" component={SingUp} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
