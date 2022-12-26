import React, { createContext ,useContext, useState} from 'react';

const StateContext = createContext();

const initialState ={
    chat:false,
    cart:false,
    userProfile:false,
    Notification:false

}


export const  ContextProvider=({ children }) =>{
    const[activeMenu , setActiveMenu]=useState (true);
    const [isClicked,setIsCliked]=useState(initialState);
    const handleClick =(clicked) =>{
        setIsCliked({...initialState ,[clicked]: true});
    }
    return (
        <StateContext.Provider 
        value={{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsCliked,
            handleClick
    
    }}>

          {children}
         </StateContext.Provider>
    )
}
export const useStateContext= () => useContext (StateContext);