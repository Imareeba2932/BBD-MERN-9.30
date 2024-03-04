import React, { useState } from 'react'
import logo from '../assets/pic.png'

const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (e) => {
        if (e.code === "Enter") {
            console.log(e.target.value);
            setTodoList([...todoList, e.target.value])
            console.log([...todoList, e.target.value])
            e.target.value = "";
        }
    };

    const removeTodo = (index) => {
        console.log(index);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <input type='text' className='form-control' placeholder='Add Todo' 
                            onKeyDown = {addNewTodo} />
                        </div>
                        <div className="card-body">
                            {todoList.map((todo, index) => {
                                return (
                                    <div className="d-flex justify-content-between mt-3">
                                        <h5>{todo}</h5>
                                        <button className='btn btn-danger' onClick = {() => {removeTodo(index)}}>Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                    <img src={logo} alt="pic" className='img-fluid w-50' />
                </div>
            </div>
        </div>
    )
}

export default TodoList