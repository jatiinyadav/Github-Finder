const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USER' :
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                loading: true
            }
        case 'GET_SINGLE_USER':
            return {
                ...state, 
                singleUser: action.payload,
                loading: false
            }
        default: 
        return state
    }
}

export default githubReducer