import React from 'react';
import {HashRouter as Router,Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home3</Link>
                    </li>
                    <li>
                        <Link to="/about">About3</Link>
                    </li>
                    <li>
                        <Link to="/topic">Topic3</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}