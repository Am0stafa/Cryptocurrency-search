import React, {createContext, useState} from 'react'

export const CoinContext = createContext();

const CoinContextProvider = ({children}) => {
    const [coin, setCoin] = useState([])
    
    return (
        <CoinContext.Provider value={{coin, setCoin}}>
        {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider


