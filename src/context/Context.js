import { createContext, useReducer } from "react";
import githubReducer from "./ContextReducer";

const GithubFinderContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubFinderProvider = ({ children }) => {

    // const [result, setResults] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {
        users: [],
        singleUser: {},
        loading: false
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    // Searching All Users
    const searchResults = async (inputText) => {

        setLoading()

        const params = new URLSearchParams({
            q: inputText
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const { items } = await response.json()

        dispatch({
            type: 'GET_USER',
            payload: items
        })
    }

    // A Single User
    const searchSingleUser = async (login) => {

        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_SINGLE_USER',
                payload: data
            })
        } 

    }

    return <GithubFinderContext.Provider value={{
        loading: state.loading,
        result: state.users,
        singleUser: state.singleUser,
        users: initialState.users,
        searchResults,
        searchSingleUser
    }} >
        {children}

    </GithubFinderContext.Provider>

}

export default GithubFinderContext