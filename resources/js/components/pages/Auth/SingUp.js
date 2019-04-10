import React from 'react'
import { connect } from 'react-redux'
import api from '@/api'

import Row from '@/components/constants/Row'

class SingUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            password_confirmation: ''
        };

        this.changeStates = this.changeStates.bind(this);
        this.register = this.register.bind(this);
    }

    changeStates(event) {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.surname]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.password]: event.target.value,
            [event.target.password_confirmation]: event.target.value,
        })
    }

    register() {
        api.post('/register', this.state)
            .then(() => this.props.history.push('/'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Row>
                    <input type='text' className='form-control' name="name" placeholder='Name'
                           value={this.state.name}
                           onChange={this.changeStates}
                    />
                </Row>
                <Row>
                    <input type='text' className='form-control' name="surname" placeholder='Surname'
                           value={this.state.surname}
                           onChange={this.changeStates}
                    />
                </Row>
                <Row>
                    <input type='email' className='form-control' name="email" placeholder='Email'
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
                <Row>
                    <input type='password' className='form-control' name="password_confirmation" placeholder='Confirm password'
                           value={this.state.password_confirmation}
                           onChange={this.changeStates}
                    />
                </Row>
                <Row className={''}>
                    <button className='btn btn btn-success float-right'
                            onClick={this.register}
                    >
                        Register
                    </button>
                </Row>
            </div>
        )
    }
}

export default connect()(SingUp)
