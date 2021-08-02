import React from 'react';

const Task = (props) => {

    const { text, deadline, id } = props.task

    return (
        <div>
            <p>
                <strong>{text} </strong>
                <i>deadline: {deadline} </i>
                <button onClick={() => props.change(id)}>Mark as done</button>
                <button onClick={() => props.delete(id)}>delete</button>
            </p>
        </div>
    );
}

export default Task;