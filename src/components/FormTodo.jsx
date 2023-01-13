import React from 'react';
import '../styles/FormTodo.scss';
import {TodoContext} from "../context/context";
const FormTodo = () => {
    const [value, setValue] = React.useState('');
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        addTodo(value);
        setOpenModal(false);
    }
    const onCancele = () => {
        setOpenModal(false);
    }

    return (
        <form onSubmit={onAdd}>
            <textarea onChange={(e) => onChange(e)} value={value} placeholder="Ingrese Tarea a Realizar" />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancele} className="TodoForm-button TodoForm-button--cancel" type="button">Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
};

export {FormTodo};