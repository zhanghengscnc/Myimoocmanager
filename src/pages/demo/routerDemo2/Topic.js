import React from 'react';
import {Link} from 'react-router-dom';
export default class Topic extends React.Component {
    render() {
        return (
            <div>
                <p>this this Topic</p>
                <Link to="/topic/son">嵌套路由</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}