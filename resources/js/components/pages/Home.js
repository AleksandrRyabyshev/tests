import React, {Fragment} from 'react'
import { connect } from 'react-redux'

import { isLogged } from '@/store/actions/auth'

import Header from '@/components/layout/Header'
import Auth from '@/components/pages/Auth'
import ListUsers from '@/components/pages/User/ListUsers'

class Home extends React.Component {

    componentDidMount() {
        this.props.isLogged(!!localStorage.getItem('token'));
    }

    render() {
        let page = <Auth/>,
            header = '',
            classWrapper = 'd-flex align-items-center h-100';

        if (this.props.logged) {
            page = <ListUsers/>;
            header = <Header/>;
            classWrapper = '';
        }

        return (
            <Fragment>

                {header}

                <div className='container h-100'>
                    <div className='row h-100 justify-content-center'>
                        <div className={`col-md-8 h-100 ${classWrapper}`}>

                            {page}

                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.isLogged
    }
};

const mapDispatchToState = { isLogged };

export default connect(
    mapStateToProps,
    mapDispatchToState
)(Home)
