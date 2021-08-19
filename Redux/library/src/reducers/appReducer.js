import { ADD_RATE, EDIT, DELETE } from "../actions/appActions";

const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_RATE:

            return [...state, action.payload];
        case EDIT:
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement;
                }
                return ({
                    author: action.payload.author,
                    comment: action.payload.comment,
                    id: currentStateElement.id,
                    rate: action.payload.rate
                });
            });
        case DELETE:
            return state.filter(currentStateElement =>
                currentStateElement.id !== action.payload.id);
        default:
            console.log(`There's no action like ${action.type}`)
            return state;
    }
}

export default appReducer;