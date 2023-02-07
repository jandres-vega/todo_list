import React, {useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const TodoContext = React.createContext({});

function Provider({children}) {

    let todosAll = [];
    const [theme, setTheme] = React.useState(true);

    const localStorageItems = localStorage.getItem('TODOS_V1');
    let copyData = JSON.parse(localStorageItems);
    const {item, saveItem, setItem, loading, error} = useLocalStorage('TODOS_V1');
    // const {item, saveItem, setItem, loading, error} = useLocalStorage('TODOS_V1', []);

    const [inputSearch, setInputSearch] = useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const amountItemsCompleted = item.filter(item => item.completed === true).length;
    const amountItems = item.length;
    const [state, setState] = React.useState({
        all:true,
        active: false,
        completed: false
    });

    if (inputSearch.length === 0){
        todosAll = item;

    }else {
        todosAll = item.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const inputSearchText = inputSearch.toLowerCase();
            return todoText.includes(inputSearchText);
        })
    }
    const addTodo = (text) => {
        const newTodos = [...item];
        newTodos.push({
            completed: false,
            text
        })
        saveItem(newTodos)
    }

    const deleteTodo = (text) => {
        const todosFilters = todosAll.filter(todo => todo.text !== text);
        saveItem(todosFilters);
    }

    const clearData = () => {
        saveItem([])
    }
    const filterTodoActive = () => {
        const filterActive = copyData.filter(item => item.completed === false);
        console.log(filterActive)
        setItem(filterActive);
        setState({
            all: false,
            active: true,
            completed: false
        })
    }
    const filterTodoCompleted = () => {
        const filterActive = copyData.filter(item => item.completed === true);
        setItem(filterActive)
        setState({
            all: false,
            active: false,
            completed: true
        })
    }

    const getAllData = () => {
        setItem(copyData);
        setState({
            all: true,
            active: false,
            completed: false
        })
    }

    const onComplete = (text) => {
        const todoCompleted = item.findIndex(todo => todo.text === text);
        const newTodos = [...item]
        newTodos[todoCompleted].completed = true;
        saveItem(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            openModal,
            amountItemsCompleted,
            amountItems,
            setOpenModal,
            clearData,
            onComplete,
            deleteTodo,
            addTodo,
            theme,
            setTheme,
            state,
            setInputSearch,
            inputSearch,
            todosAll,
            loading,
            error,
            getAllData,
            filterTodoActive,
            filterTodoCompleted
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, Provider}