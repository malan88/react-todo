import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
    render() {
        return (<li>{this.props.value}</li>)
    }

}

class List extends React.Component {
    constructor(props) {
        this.state = {
            list: []
        }
    }

    createItem(value) {
        return (<Item value={value} />)
    }

    render() {
        const list = [];
        for (let i = 0; i < this.state.list.length; i++)
            list.push(this.createItem(this.state.list[i]));

        return (
            <div>
                <ol>{list}</ol>
            </div>
        );
    }
}


class ToDo extends React.Component {
    constructor(props) {
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>Add task:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class ToDoList extends React.Component {
    //make global state here

    //create a function to pass down to ToDo
    
    render() {
        return (
            <div className="todolist">
                <ToDo />
                <List />
            </div>
        )
    }
}

// ==================================

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
