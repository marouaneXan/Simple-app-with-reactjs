import { FaTimes } from "react-icons/fa";
const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>props.showToggle(props.task.id)}>
      <h3>
        {props.task.text} <FaTimes style={{color:'red'}} onClick={()=>props.onDelete(props.task.id)}/>
      </h3>
      <h3>{props.task.day}</h3>
    </div>
  );
};
export default Task;
