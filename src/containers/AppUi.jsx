import React from 'react';
import imgHeaderDark from '../assets/bg-desktop-dark.jpg';
import imgHeaderLight from '../assets/bg-desktop-light.jpg';
import {TodosItems} from "./TodosItems";
import CreateTodoButton from "../components/CreateTodoButton";
import '../styles/AppUi.scss';
import {TodoContext} from "../context/context";
import {Modal} from "../modal/Modal";
import {FormTodo} from "../components/FormTodo";

const AppUi = () => {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    const {theme} = React.useContext(TodoContext);

    return (
        <>
            <div className="container-main">
                <div className="container-img-header">
                    {
                        theme ? <img src={imgHeaderDark} alt="img-header" />:
                            <img src={imgHeaderLight} alt="img-header" />
                    }
                </div>
                <div className={`${theme ? 'container-button': 'container-botton-light'}`}>
                    <TodosItems />
                </div>
            </div>
            {
                openModal && (
                    <Modal>
                        <FormTodo />
                    </Modal>
                )
            }
            <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
};

export {AppUi};