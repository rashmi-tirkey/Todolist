import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './TodoList.css';

const TodoList = ({ name }) => {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [complete, setComplete] = useState([]);

    const navigate = useNavigate();

    const todoHandle = () => {
        setTodo([...todo, task]);
        setTask("");

    }

    const deleteTask = (index) => {
        setProgress([...progress, todo[index]]);
        todo.splice(index, 1);
        setTodo([...todo]);
    }

    const completeHandle = (index) => {
        setComplete([...complete, progress[index]]);
        progress.splice(index, 1);
        setProgress([...progress]);
    }

    const backTodoHandle = (index) => {
        setTodo([...todo, task[index]]);
        todo.splice(index, 0, progress[index]); // splice(index, 0, value) => add value in index
        setTodo([...todo]); // because splice is change array
        let removeElement = progress.splice(index, 1)[0]; // it will delete progress[index]a.splice(0,1)[0]
        progress.splice(index, 0, removeElement); // splice(index, 0, value) => add value in index
        progress.splice(index, 1); // it will delete progress[index]
        // setProgress([...progress]); // because splice is change array

        /*
             console.log(index, "index ");
        setTodo([...todo, task[index]]);
        console.log(index, "index 0");
        todo.splice(index, 0, progress[index]); // splice(index, 0, value) => add value in index
        setTodo([...todo]); // because splice is change array
        console.log(index, "index 1");
        let a = progress.splice(index, 1)[0]; // it will delete progress[index]a.splice(0,1)[0]
        progress.splice(index, 0, a); // splice(index, 0, value) => add value in index
        console.log(index, "index 2");
        progress.splice(index, 1); // it will delete progress[index]
        setProgress([...progress]); 

        */
    }

    const handleQueryParam = () => {
        const url = `/home?complete=${complete}`;
        navigate(url);
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <div className="todo-container">
                <input
                    type="text"
                    placeholder="Add a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={todoHandle}>Add</button>
            </div>
            <div className="todo-list-wrapper">
                <div>
                    <h1>Todo-Element</h1>
                    {todo.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                            <button onClick={() => deleteTask(index)}>Progress</button>
                        </div>
                    ))}

                </div>
                <div>
                    <h1>Progress</h1>
                    {progress.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                            <div>
                                <button onClick={() => completeHandle(index)}>Complete</button>
                                <button onClick={() => backTodoHandle(index)}>back todo</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h1>Complete</h1>
                    {complete.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                            <button onClick={handleQueryParam}>Completed</button>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
