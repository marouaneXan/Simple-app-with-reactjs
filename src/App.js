import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
function App() {
  const [tasks,setTasks]=useState(
    [
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
          id: 1,
          text: "aymane squirro",
          day: 2022,
          reminder: true,
        },
      ]
)
  return (
    <div className="container">
      <Header title="Task tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
