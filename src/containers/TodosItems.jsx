import React from 'react';
import '../styles/TodosItems.scss';
import ChangeTheme from "../components/ChangeTheme";
import {Search} from "../components/Search";
import {ItemTodo} from "../components/ItemTodo";
import {CounterTodo} from "../components/CounterTodo";
import {ListTodos} from "../components/ListTodos";
import {TodoContext} from "../context/context";
import imgLoading from '../assets/loading.gif';
import imgIngresaTodo from '../assets/ingresa-todo.gif';
const TodosItems = () => {
    const {todosAll, loading, error} = React.useContext(TodoContext);

    return (
        <div className="container-todos">
            <ChangeTheme />
            <Search />
            <div className="todos-items-li">
                {loading && <img src={imgLoading} alt={imgLoading}/>}
                {(!loading && !todosAll.length) && <img src={imgIngresaTodo} alt={imgIngresaTodo}/>}
                <ListTodos>
                    {
                        todosAll.map(todo => (
                            <ItemTodo
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                            />
                        ))
                    }
                </ListTodos>
            </div>
            <CounterTodo />
        </div>
    );
};

export {TodosItems};