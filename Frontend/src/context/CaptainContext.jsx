import React, { createContext, useContext, useState } from 'react';


export const CaptainDataContext = createContext();


export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);

    const setCaptainData = (newCaptain) => {
        setCaptain(newCaptain);
    };

    return (
      <CaptainDataContext.Provider value={{ captain, setCaptainData }}>
        {children}
      </CaptainDataContext.Provider>
    );
};

export default CaptainContext;
