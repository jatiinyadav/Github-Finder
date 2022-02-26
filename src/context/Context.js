import { createContext, useReducer } from "react";
import githubReducer from "./ContextReducer";

const GithubFinderContext = createContext();

export const GithubFinderProvider = ({ children }) => {
    // const [result, setResults] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {
        users: [],
        singleUser: {},
        repos: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    return (
        <GithubFinderContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GithubFinderContext.Provider>
    );
};

export default GithubFinderContext;
