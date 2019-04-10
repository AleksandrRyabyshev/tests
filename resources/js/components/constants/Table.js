import React from 'react'

class Table extends React.Component {

    static upFirstLetter(str) {
        return !str ? str : str[0].toUpperCase() + str.slice(1);
    }

    render() {
        const { data, columns } = this.props;
        let body = [];

        if (data.length && columns.length) {
            const haveId = data[0].id;

            body = data.map((value, index) =>
                <tr key={haveId ? value.id : index}>

                    {columns.map((el, index) =>
                        <td key={index}>
                            {value[el.value]}
                        </td>
                    )}

                </tr>
            )
        }

        return (
            <table className='table'>
                <thead>
                    <tr>
                        {columns.map((column, index) =>
                            <th key={index}>
                                {Table.upFirstLetter(column.label)}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        )
    }
}

Table.defaultProps = {
    data: [],
    columns: []
};

export default Table
