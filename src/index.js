import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Item = ({ value }) => {
    return <li>{value}</li>;
};

const List = ({ list }) => {
    return (
        <div>
            <ol>
                {list.map(item => (
                    <Item key={item} value={item} />
                ))}
            </ol>
        </div>
    );
};

const ToDo = ({ setGlobalState }) => {
    const [newItem, setNewItem] = useState('');

    const handleChange = event => {
        setNewItem(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setGlobalState(prevState => [...prevState, newItem]);
        setNewItem('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add task:</label>
            <input type='text' value={newItem} onChange={handleChange} />
            <input type='submit' value='Submit' />
        </form>
    );
};

const ToDoList = () => {
    const [globalState, setGlobalState] = useState([]);

    return (
        <div className='todolist'>
            <ToDo setGlobalState={setGlobalState} />
            <List list={globalState} />
        </div>
    );
};

// ==================================

ReactDOM.render(<ToDoList />, document.getElementById('root'));
