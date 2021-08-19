export const ADD_RATE = 'ADD_RATE'
export const DELETE = 'DELETE';
export const EDIT = 'EDIT'

export const addRate = ({ author, comment, rate }) => ({
    type: ADD_RATE,
    payload: {
        author,
        comment,
        id: Math.floor(Math.random() * 1234),
        rate,
    }
});

export const deleteRate = id => ({
    type: DELETE,
    payload: {
        id,
    }
});

// const data = {
//     author,
//     comment,
//     id,
//     rate,
// }

export const editRate = ({ author, comment, id, rate }) => ({
    type: EDIT,
    payload: {
        //    ...data
        author,
        comment,
        id,
        rate,
    }
});

