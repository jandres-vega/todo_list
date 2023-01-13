import React from 'react';
import '../styles/ItemTodo.scss';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {TodoContext} from "../context/context";
const ItemTodo = ({text, completed}) => {

    const {deleteTodo, onComplete, theme} = React.useContext(TodoContext);
    return (
        <li className={`${theme ? 'TodoItem':'TodoItem-light'}`}>
            <div className="container-ckeck">
                <FontAwesomeIcon
                    className={`Icon-check ${completed && 'icon-check-active'}`} icon={faCircle}
                    onClick={() => onComplete(text)}
                />
                <span className={completed ?'check':'check-f'}>√</span>
            </div>
            <p className={`${completed ? 
                'TodoItem-p--complete': theme ? 
                    'content-todo':'TodoItem-p--complete-light'}`}>{text}</p>
            <FontAwesomeIcon
                className="Icon-delete" icon={faX}
                onClick={() => deleteTodo(text)}
            />
        </li>
    );
};

export {ItemTodo};