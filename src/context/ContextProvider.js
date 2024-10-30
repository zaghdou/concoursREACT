// MyContext.js
import React, { createContext, useState } from 'react';

// Create a Context
export const ContextDonnee = createContext();

// Create a Provider Component
export const ContextProvider = ({ children }) => {
    const [donnee, setDonnee] = useState( {
        nom: "",
        prenom: "",
        email : "",
        numTel: "",
    })



    return (
        <ContextDonnee.Provider value={{ donnee, setDonnee }}>
            {children}
        </ContextDonnee.Provider>
    );
};
