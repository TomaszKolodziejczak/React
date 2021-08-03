import React from 'react';
import Task from './Task';

const TaskList = (props) => {


  const active = props.task.filter(taks => taks.active === true)
  // const tasks = props.tasks.map(task =>
  //   <Task
  //     key={task.id}
  //     task={task}
  //     delete={props.delete}
  //     change={props.change}
  //   />)

  return (
    <>
      <div className="active">
        <h1>Tasks to do</h1>
        {tasks}
      </div>
      <hr />
      <div className="done">
        <h3>Done tasks (no)</h3>
      </div>
    </>
  );
}

export default TaskList;