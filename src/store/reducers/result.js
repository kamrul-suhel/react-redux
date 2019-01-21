import * as actionType from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date() , value: action.result})
            }

        case actionType.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            const newArray = state.results.filter((result) => {
                return result.id !== action.id;
            });

            return {
                ...state,
                results: newArray
            }
    }

    return state;
}

export default reducer;