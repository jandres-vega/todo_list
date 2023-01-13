import React from "react";
function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                let parsedItem;
                const localStorageItems = localStorage.getItem(itemName);
                if (!localStorageItems){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                }else {
                    parsedItem = JSON.parse(localStorageItems);
                    // copyDataLocalStorage = JSON.parse(localStorageItems);
                }
                setItem(parsedItem);
                setLoading(false);
            }catch (e) {
                setError(e);
            }
        },3000);

    },[])


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