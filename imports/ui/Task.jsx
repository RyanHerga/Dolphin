import React, { PureComponent } from "react";

// Task component - represents a single todo item
export default class Task extends PureComponent {
    render() {
        const { task } = this.props;
        const { text } = task;

        return <li>{text}</li>;
    }
}
