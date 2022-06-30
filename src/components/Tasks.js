import Task from './Task'
const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  )
}
export default Tasks
