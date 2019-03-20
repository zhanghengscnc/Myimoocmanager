import React from 'react';
export default class Info extends React.Component {
    render() {
        return (
            <div>
                <p>this this Info,the id is :{this.props.match.params.id}</p>
            </div>
        );
    }
}