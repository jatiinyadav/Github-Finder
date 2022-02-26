const githubReducer = (state, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "CLEAR_USER":
            return {
                ...state,
                users: [],
            };
        case "GET_USER_AND_REPO":
            return {
                ...state,
                singleUser: action.payload.singleUser,
                repos: action.payload.repos,
                loading: false
            }
        default:
            return state;
    }
};

export default githubReducer;
