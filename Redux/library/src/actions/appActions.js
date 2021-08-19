export const ADD_RATE = 'ADD_RATE'
export const DELETE = 'DELETE';
export const EDIT = 'EDIT'

const addRate = ({ author, comment, rate }) => ({
    type: ADD,
    payload: {
        author,
        comment,
        id: Math.floor(Math.random * 1234),
        rate,
    }
});

const deleteRate = id => ({
    type: DELETE,
    payload: {
        id,
    }
});

data = {
    author,
    comment,
    id,
    rate,
}

const editRate = ({ data }) => ({
    type: EDIT,
    payload: {
        ...data
    }
});

