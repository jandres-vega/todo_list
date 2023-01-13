import React from 'react';
import '../styles/Search.scss';
import {TodoContext} from "../context/context";
const Search = () => {

    const {setInputSearch, inputSearch, theme} = React.useContext(TodoContext);

    const handleChange = (e) => {
        setInputSearch(e.target.value);
    }

    return (
        <div className={`${theme ? 'container-search': 'container-search-li'}`}>
            <input
                onChange={(e) => handleChange(e)}
                value={inputSearch}
                placeholder="Search....."
            />
        </div>
    );
};

export {Search};