import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "marouane zahaoui",
      day: 2022,
      reminder: true,
    },
    {
      id: 2,
      text: "ahmed roufani",
      day: 2022,
      reminder: true,
    },
    {
      id: 3,
      text: "aymane squirro",
      day: 2022,
      reminder: true,
    },
  ]);
  //Delete Task
  const DeleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  // Toggle reminder
  const ToggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder}:task))
  }
  return (
    <div className="container">
      <Header title="Task tracker" />
      {
        tasks.length>0 ?(
          <Tasks tasks={tasks} onDelete={DeleteTask} showToggle={ToggleReminder} />
        ):(
          'No Task To Show'
        )
      }
    </div>
  );
}

export default App;
