
export default function Header(props) {
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <button className="btn">Add Task</button>
    </header>
  )
}
