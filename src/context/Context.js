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
        loading: false
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    // Searching Users
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


    return <GithubFinderContext.Provider value={{
        loading: state.loading,
        result: state.users,
        users: initialState.users,
        searchResults,
    }} >
        {children}

    </GithubFinderContext.Provider>

}

export default GithubFinderContext