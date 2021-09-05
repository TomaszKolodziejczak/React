import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red'
  }

  const { text, deadline, id, finishDate, active, important } = props.task

  if (active) {
    const deadlineDate = new Date(deadline).toDateString()
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text} </strong>
          <em style={{ fontSize: 10 }}>deadline: {deadlineDate} </em>
          <br />
          <button onClick={() => props.change(id)}>Mark as done</button>
          <button onClick={() => props.delete(id)}>delete</button>
        </p>
      </div>
    );
  } else {
    const finished = new Date(finishDate).toDateString()
    return (
      <div>
        <p>
          <strong>{text} </strong><br />
          <em style={{ fontSize: 10 }}>deadline: {deadline}, </em>
          <em style={{ fontSize: 10 }}>finished: {finished} </em>
          <button onClick={() => props.change(id)}>Mark as undone</button>
          <button onClick={() => props.delete(id)}>delete</button>
        </p>
      </div>
    );
  }
}


export default Task;