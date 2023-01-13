import React from 'react';
import '../styles/CreateTodoButton.scss';
const CreateTodoButton = ({setOpenModal, openModal}) => {

    const handleClick = () => {
        setOpenModal(!openModal)
    }

    return (
        <button onClick={handleClick} className="CreateTodoButton">+</button>
    );
};

export default CreateTodoButton;