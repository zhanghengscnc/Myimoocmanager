import React from 'react';
import {HashRouter as Router,Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home4</Link>
                    </li>
                    <li>
                        <Link to="/about">About4</Link>
                    </li>
                    <li>
                        <Link to="/topic">Topic4</Link>
                    </li>
                    <li>
                        <Link to="/haha404">haha404</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}