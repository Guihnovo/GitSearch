import { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = props => {

    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [star, setStar ] = useState({});
    const [following, setFollowing] = useState({});
    const [followers, setFollowers] = useState({});

    return (
      <context.Provider value={{
        userData,
        repos,
        star,
        following,
        followers,
        setFollowing,
        setUserData,
        setRepos,
        setStar,
        setFollowers
      }}>
        {props.children}
      </context.Provider>
    );
}