import Button from './Buttons'
import Tasks from './Buttons'
export default function Header(props) {
    const onClick=()=>{
        console.log('clicked')
    }
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button  onClick={onClick} color="green" text="Add Task"/>
    </header>
  )
}
