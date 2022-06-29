import {useState} from 'react'
export default function Tasks() {
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
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}
