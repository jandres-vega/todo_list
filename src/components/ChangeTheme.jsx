import React from 'react';
import '../styles/ChangeTheme.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-regular-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {TodoContext} from "../context/context";
const ChangeTheme = () => {

    const {theme, setTheme} = React.useContext(TodoContext);
    const handleTheme = () => {
        setTheme(!theme)
    }

    return (
        <div className="container-theme">
            <h1>T O D O</h1>
            {
                theme ?
                    <FontAwesomeIcon onClick={handleTheme} className="icon-sun" icon={faSun} />:
                    <FontAwesomeIcon onClick={handleTheme}  className="icon-sun" icon={faMoon} />
            }

        </div>
    );
};

export default ChangeTheme;