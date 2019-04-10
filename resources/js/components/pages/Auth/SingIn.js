import React from 'react'
import { connect } from 'react-redux'

import { login } from '@/store/actions/auth'
import Row from '@/components/constants/Row'

class SingIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.changeStates = this.changeStates.bind(this);
    }

    changeStates(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return (
            <div>
                <Row>
                    <input type='text' className='form-control' name="email" placeholder='Email'
                            value={this.state.email}
                            onChange={this.changeStates}
                    />
                </Row>
                <Row>
                    <input type='password' className='form-control' name="password" placeholder='Password'
                           value={this.state.password}
                           onChange={this.changeStates}
                    />
                </Row>
                <Row className={''}>
                    <button className='btn btn btn-success float-right'
                            onClick={() => this.props.login(this.state)}
                    >
                        Login
                    </button>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = { login };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingIn)
