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
        for (let i = 0; i < this.state.list.length; i++)
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
        this.props.addItem(event.target.value)
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
    state = {items: []}

    addItem(item) {
        items = this.state.items.slice()
        items.push(item)
        this.setState({items: items})
    }

    render() {
        return (
            <div className="todolist">
                <ToDo addItem={this.addItem} />
                <List list={this.items} />
            </div>
        )
    }
}

// ==================================

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
