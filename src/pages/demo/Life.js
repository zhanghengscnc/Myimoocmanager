import React from 'react';
import Child from './Child';
import content from './index.less';

export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: 'zhangheng'
        }
    }

    handleAdd() {
        console.log(this)
        this.setState(
            {
                count: this.state.count + 1,
                name:this.state.name.substring(0,this.state.name.length).concat(this.state.count)
            }
        )
    }

    handleAdd2 = () => {
        console.log(this)
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div className="content">
                <p>React life</p>
                <button onClick={this.handleAdd.bind(this)}>点我一下1</button>
                <button onClick={this.handleAdd2}>点我一下2</button>
                    <p>{this.state.count}</p>
                <Child name={this.state.name}/>
            </div>
    );
    }
    }