import React from 'react'
import api from '@/api'

import Row from '@/components/constants/Row'
import Table from '@/components/constants/Table'

class ListUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        api.get('/users')
            .then(({ data }) => this.setState({users: data}));
    }

    render() {
        const tableColumns = [
            {
                value: 'surname',
                label: 'фамилия'
            },
            {
                value: 'name',
                label: 'имя'
            },
            {
                value: 'email',
                label: 'email'
            },
        ];

        return (
            <div className='card'>
                <div className='card-header'> A list of users: </div>
                <div className='card-body'>
                    <Row>
                        <Table data={this.state.users} columns={tableColumns}/>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ListUsers
