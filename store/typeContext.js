import { useContext, createContext, useState, useEffect } from 'react'

const Context = createContext()

export default function CategoryProvider({children}) {
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => setTypes(data.results))
    })

    return <Context.Provider value={{
        types,
        setTypes,
    }}>{children}</Context.Provider>
}

export const useTypes = () => useContext(Context)