import React from 'react';
import '../styles/CounterTodo.scss';
import {TodoContext} from "../context/context";
const CounterTodo = () => {
    const {
        amountItems,
        clearData,
        state,
        filterTodoActive,
        filterTodoCompleted,
        getAllData,
        theme
    } = React.useContext(TodoContext);

    return (
        <div className={`${theme ? 'container-count-todo': 'container-count-todo-light' }`}>
            <h5>{`${amountItems} de left`}</h5>
            <div className="container-btn">
                <span
                    className={`${state.all && 'active-all'}`}
                    onClick={getAllData}>
                    All
                </span>
                <span
                    className={`active-span ${state.active && 'active-span-trans'}`}
                    onClick={filterTodoActive}>
                    Active
                </span>
                <span
                    className={`active-completed ${state.completed && 'active-span-trans' }`}
                    onClick={filterTodoCompleted}>
                    Completed
                </span>
            </div>

            <p onClick={clearData} className={`clear-p ${amountItems===0 && 'disabled-span'}`}>Clear Completed</p>
        </div>
    );
};

export {CounterTodo};