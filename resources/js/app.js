import '@/bootstrap'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import configStore from '@/store'
import Home from '@/components/pages/Home'

const store = configStore();

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:filter?" component={Home} />
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

if (document.getElementById('root')) {
    render(
        <Root store={store}/>
        , document.getElementById('root')
    )
}
