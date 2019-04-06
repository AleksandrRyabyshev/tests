import React from 'react'

export default function () {
    return (
        <div>
            <div className="tab-content" id="nav-tabContent">

                <div className="row">
                    <div className="form-group col">
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <input type="text" className="form-control" placeholder="Surname"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="password" className="form-control" placeholder="Password confirmed"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
