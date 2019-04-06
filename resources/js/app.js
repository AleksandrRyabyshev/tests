import '@/bootstrap'
import Home from '@/components/Home'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

if (document.getElementById('root')) {
    render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
        , document.getElementById('root')
    )
}
