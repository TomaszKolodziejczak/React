import React from 'react';

const Task = (props) => {

    const { text, deadline } = props.task
    return (
        <div>
            <p>
                <strong>{text} </strong>
                <i>deadline: {deadline} </i>
                <button onClick={() => console.log('done')}>Mark as done</button>
                <button onClick={() => console.log('delete')}>delete</button>
            </p>
        </div>
    );
}

export default Task;