import React, {Fragment} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isLogged } from '@/store/actions'

import Header from '@/components/layout/Header'

import Auth from '@/components/pages/Auth'
import ListUsers from '@/components/pages/User/ListUsers'

export class App extends React.Component {

    componentDidMount() {
        this.props.isLogged(!!localStorage.getItem('token'));
    }

    render() {
        let header = '',
            content = <Auth/>,
            alignItems = 'align-items-center',
            col = 'col-8';

        if (this.props.logged) {
            header = <Header/>;
            content = <ListUsers/>;
            alignItems = '';
            col = 'col';
        }

        return (
            <Fragment>

                { header }

                <div className='container h-100'>
                    <div className={`d-flex justify-content-center ${alignItems} h-100`}>
                        <div className={col}>

                            { content }

                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        logged: state.logged,
        token: state.token
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        isLogged: isLogged,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
