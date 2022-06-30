import React from 'react'

export const AddTask = (props) => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Name' />
        </div>
        <div className='form-control'>
            <label>Year</label>
            <input type='text' placeholder='Add Year' />
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox' />
        </div>
        <input type='submit' value='Add Task'/>
    </form>
  )
}
export default AddTask