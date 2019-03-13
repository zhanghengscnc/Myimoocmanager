import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        console.log("componentWillMount:",this.props.name)
    }

    componentDidMount() {
        console.log("componentDidMount",this.props.name)
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps:", newProps);

    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount");
    }



    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}