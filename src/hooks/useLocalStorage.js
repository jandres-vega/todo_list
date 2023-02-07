import React from "react";
function useLocalStorage(itemName) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState([]);

    React.useEffect(() => {

        setTimeout(() => {
            try {
                let parsedItem;
                const localStorageItems = localStorage.getItem(itemName);
                if (!localStorageItems){
                    localStorage.setItem(itemName, JSON.stringify([]));
                    parsedItem = [];
                }else {
                    parsedItem = JSON.parse(localStorageItems);
                    //copyDataLocalStorage = JSON.parse(localStorageItems);
                }
                setItem(parsedItem);
                setLoading(false);
            }catch (e) {
                setError(e);
            }
        },3000);

    },[itemName])


    const saveItem = (newTodos) => {
        localStorage.setItem(itemName, JSON.stringify(newTodos));
        setItem(newTodos);
    }

    return {
        item,
        saveItem,
        setItem,
        loading,
        error
    }
    
}
export {useLocalStorage}