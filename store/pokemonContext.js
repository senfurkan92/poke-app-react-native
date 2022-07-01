import { useContext, createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

const Context = createContext()

const initialState = {
    list: [
    ],
    count: null,
    next: null,
    loading: false,
    loadingProcess: null,
}

const reducer = (state, action) => {
    const current = {...state}
    switch (action.type) {
        case 'count': current.count = action.value; break;
        case 'next': current.next = action.value; break;
        case 'loading': current.loading = action.value; break;
        case 'loadingProcess': current.loadingProcess = action.value; break;
        case 'list': {
                if (current.list.length < 1) {
                    current.list = action.value
                } else {
                    current.list.push(...action.value)
                }
        }; break;
        case 'detail': {
            const poke = current.list.find(x => x.name == action.value.name)
            if(poke) {
                poke.detail = action.value
            }
        }; break;
        case 'like': {
            const poke = current.list.find(x => x.name == action.name)
            poke.liked = !poke.liked
        }; break;
    }
    return current
}

export default function PokemonProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState)

    const onUploadProgress = (e) => {
        console.log(e)
    } 

    const loadMore = async () => {
        if(!state.loading) {
            dispatch({
                type: 'loading',
                value: true
            })

            await fetch(state.next || 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
                    .then(resp => resp.json())
                    .then(data => {
                        // count
                        dispatch({
                            type: 'count',
                            value: data.count
                        })
                        // next
                        dispatch({
                            type: 'next',
                            value: data.next
                        })
                        // count
                        dispatch({
                            type: 'list',
                            value: data.results.map(x => ({
                                ...x,
                                liked: false
                            }))
                        })
                        return data.results
                    })
                    .then(data => {
                        const axioses = data.map(x => axios.get(x.url))
                        axios.all(axioses, {
                            onUploadProgress,
                        })
                            .then(resps => {
                                resps.forEach(resp => {
                                    dispatch({
                                        type: 'detail',
                                        value: resp.data
                                    })
                                })
                                dispatch({
                                    type: 'loading',
                                    value: false
                                })
                            })
                    })
        }
    } 

    useEffect(() => {
        loadMore()
    }, [])

    return (
        <Context.Provider value={{state, dispatch, loadMore}}>
            {children}
        </Context.Provider>
    )
}

export const usePokemon = () => useContext(Context)