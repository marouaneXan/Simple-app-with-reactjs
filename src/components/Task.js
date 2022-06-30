const Task = (props) => {
  return (
    <div className="task">
        <h3>{props.task.text}</h3>
        <h3>{props.task.day}</h3>
    </div>
  )
}
export default Task

