import propTypes from 'prop-types'
export default function Buttons(props) {
  return (
    <button onClick={props.onClick} className="btn" style={{backgroundColor:props.color}}>{props.text}</button>
  )
}

Buttons.propTypes={
    text:propTypes.string,
    color:propTypes.string,
    onClick:propTypes.func.isRequired,
}

