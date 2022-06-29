import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'

const Context = createContext()

export default function TypeProvider({children}) {
    const [types, setTypes] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {
                const arr = data.results.map(x => ({
                    ...x,
                    id: x.url.split('/')[6]
                }))
                return arr
            })
            .then(data => {
                const urls = data.map(x => axios.get(x.url))
                axios.all(urls)
                    .then(resps => {
                        resps.map(x => x.data).forEach(x => {
                            const type = data.find(t => t.id == x.id)
                            type.damage_relations = x.damage_relations
                        })
                    })
                setTypes(data)
            })
    }, [])

    return <Context.Provider value={{
        types,
        setTypes,
    }}>{children}</Context.Provider>
}

export const useTypes = () => useContext(Context)