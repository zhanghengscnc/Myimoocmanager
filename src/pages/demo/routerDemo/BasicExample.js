import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/topics" component={Topcis}></Route>

            </div>
        </Router>
    );

}

function Home({match}) {
    return (
        <div>
            <h2>{match.path}</h2>
        </div>
    );
}

function About({match}) {
    return (
        <div>
            <h2>{match.path}</h2>
        </div>
    );
}

function Topcis({match}) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/son1`}>son1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/son2`}>son2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/son3`}>son3</Link>
                </li>
            </ul>
            <Route path={match.path} render={()=>{return(<div><h3>请选择一个son</h3></div>);}}></Route>
            <Route path={`${match.path}/:id`} component={Son}></Route>
        </div>
    );
}

function Son({match}) {
    return(
        <div>
            <h3>{match.params.id}</h3>
        </div>
    )

}

export default BasicExample;