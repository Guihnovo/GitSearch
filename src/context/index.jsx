import { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = props => {

    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [star, setStar ] = useState({});

    
    return (
      <context.Provider value={{
        userData,
        repos,
        star,
        setUserData,
        setRepos,
        setStar
      }}>
        {props.children}
      </context.Provider>
    );
}