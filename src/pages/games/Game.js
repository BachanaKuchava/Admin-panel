import React from 'react'
import Sidebar from '../../Sidebar'
import './game.css';
import axios from 'axios';
import Todo from './todo/Todo';
import { useEffect, useState } from 'react';


function Game() {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setcurrentTodo] = useState("");

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _limit: 50
            }
        })
            .then((res) => {
                setTodos(res.data)
                console.log(res.data);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prev) => {
            return [...prev, { title: currentTodo, id: todos.length, completed: false }];
        });

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            id: todos.length,
            title: currentTodo,
            completed: false
        }).then((res) => {
            console.log(res);
        })

        setcurrentTodo("");
    };

    const handleRemove = (title, id) => {
        const new_todos = todos.filter((todo) => todo.title !== title)
        setTodos(new_todos)

        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => { console.log(res) })
    }
    return (
        <div className='container-fluid bg-secondary min-vh-100'>
            <div className='row '>
                <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                    <Sidebar />
                </div>

                <div className='col-4 col-md-2'></div>
                <div className='container'>
                    <form name="create-todo" className="todoform" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={currentTodo}
                            placeholder="Todo title"
                            onChange={(e) => setcurrentTodo(e.target.value)}
                        />
                        <button type="submit">Create</button>
                    </form>
                    <div className='todo-map-div'>
                        {todos.map((todo) => {
                            return <Todo key={todo.title} id={todo.id} title={todo.title} handleRemove={handleRemove} />;
                        })}
                    </div>
                </div>
            </div>








        </div>
    )
}

export default Game
