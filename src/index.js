import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
    render() {
        return (<li>{this.props.value}</li>)
    }

}

class List extends React.Component {
    createItem(value) {
        return (<Item value={value} />)
    }

    render() {
        const list = [];
        for (let i = 0; i < this.props.list.length; i++)
            list.push(this.createItem(this.props.list[i]));

        return (
            <div>
                <ol>{list}</ol>
            </div>
        );
    }
}


class ToDo extends React.Component {
    state = {value: ''};

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add task:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}


class ToDoList extends React.Component {
    state = {items: []}

    addItem = (item) => {
        let items = this.state.items.slice()
        items.push(item)
        this.setState({items: items})
    }

    render() {
        return (
            <div className="todolist">
                <ToDo addItem={this.addItem} />
                <List list={this.state.items} />
            </div>
        )
    }
}

// ==================================

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
