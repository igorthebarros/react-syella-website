import React, { createContext, useState, useContext } from 'react'

const UserChoiceContext = createContext()

export const UserChoiceProvider = ({ children }) => {
    const [choice, setChoice] = useState('default')

    return (
        <UserChoiceContext.Provider value={{ choice, setChoice }}>
            {children}
        </UserChoiceContext.Provider>
    )
}

export const useUserChoice = () => useContext(UserChoiceContext)