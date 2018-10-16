import React, { Component } from "react";

import Task from "./Task";
import "../sass/App.scss";

// App component - represents the whole app
export default class App extends Component {
    getTasks() {
        return [
            { id: 1, text: "This is task 1" },
            { id: 2, text: "This is task 2" },
            { id: 3, text: "This is task 3" },
        ];
    }

    renderTasks() {
        return this.getTasks().map( task => (
            <Task key={ task.id } task={ task } />
        ) );
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}
