import React from 'react';
import Task from './Task';

const TaskList = (props) => {


  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  const activeTasks = active.map(task =>
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />)

  const doneTasks = done.map(task =>
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />)

  return (
    <>
      <div className="active">
        <h1>Tasks to do</h1>
        {activeTasks > 0 ? activeTasks : <p>Nothing to do :)</p>}
      </div>
      <hr />
      <div className="done">
        <h3>Done tasks ({doneTasks.length})</h3>
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
}

export default TaskList;