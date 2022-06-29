import Button from './Buttons'
export default function Header(props) {
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button color="green" text="Add Task"/>
    </header>
  )
}
