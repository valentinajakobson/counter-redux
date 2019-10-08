const initialState = {
    counter:0,
    results:[]
}

const reducer = (state = initialState, action) => {
     // eslint-disable-next-line 
    switch (action.type){
        case 'INCREASE':
        return { ...state, counter: state.counter + 1};
        case 'DECREASE':
        return {...state, counter: state.counter - 1};
        case  'ADD': 
        return {...state, counter: state.counter + action.value};
        case 'REMOVE':
        return {...state, counter: state.counter - action.value};
        case 'STORE_RESULT':
        return {...state, results: state.results.concat({id: new Date(), value: state.counter})};
    }
    return state;
}

export default reducer;