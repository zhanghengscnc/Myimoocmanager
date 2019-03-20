import React from 'react';
import {Link} from 'react-router-dom';
export default class Topic extends React.Component {
    render() {
        return (
            <div>
                <p>this this Topic</p>
                <Link to="/topic/258">嵌套路由1</Link>
                <br/>
                <Link to="/topic/147">嵌套路由2</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}