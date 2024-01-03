import { createContext, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const ContextProvider = ({ children }) => {
    const sharedValue = 'Shared Value';

    return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
};

// export { ContextProvider, useMyContext };
