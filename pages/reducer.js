

const reducer = (state , action) =>{
    switch (action.type) {
        case 'GET_LOADING':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_NEWS':
           return {
            ...state,
            isLoading: false,
            articles: action.payload.articles,
            totalResults: action.payload.totalResults
           }

    }
    return state;
}

export default reducer;