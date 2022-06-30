import React from 'react'
const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  )
}
export default Tasks
