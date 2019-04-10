import React from 'react';

class Row extends React.Component {

    render() {
        let className = `${this.props.col} `;
        className += this.props.className || '';

        return (
            <div className='row'>
                <div className={className}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Row.defaultProps = {
    className: 'form-group',
    col: 'col'
};

export default Row
