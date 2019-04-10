import React from 'react'

export default () => {
    return (
        <nav className='navbar navbar-light bg-light border-bottom mb-5'>
            <a href='/' className='navbar-brand'> Home </a>
            <form className='form-inline'>
                <a href='/' className='btn btn-sm btn-outline-secondary my-2 my-sm-0'
                   onClick={() => localStorage.removeItem('token')}
                >
                    Log Out
                </a>
            </form>
        </nav>
    )
}
