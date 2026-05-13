import React from 'react'
import { useState } from 'react'
import ToDoList from './ToDoList'

function ToDoForm() {
const[task,setTask]=useState({
  taskNumber:'',
  taskName:'',
  status:'pending',
  dueDate:'',
  comments:''  
})
    const[storeTask,setStoreTask]=useState([])

    function handleSubmit(e){
        e.preventDefault()
        // store user input
        setStoreTask([...storeTask,task])
        // clear the form
        setTask({
        taskNumber:'',
        taskName:'',
        status:'pending',
        dueDate:'',
        comments:''  
        })
        // POST data to json server
    }
            console.log(storeTask)

  return (
        <>
        <div className='border-violet-800 bg-gray-300 max-w-2xl my-0 mx-auto p-10 rounded-md'>
                <h1>Task Form</h1>

        <form className='flex flex-col gap-1 ' onSubmit={handleSubmit}>
            <label htmlFor="taskNumber">Task Number:</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="number" value={task.taskNumber} id='taskNumber'onChange={(e)=>setTask({...task,taskNumber:e.target.value})}required/>

            <label htmlFor="task">Task</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" type="text" value={task.taskName} id='task'onChange={(e)=>setTask({...task,taskName:e.target.value})}required/>
            <label htmlFor="status">Status</label>
            <input className="border outline-violet-800 rounded-md p-2 w-full" 
 type="text" value={task.status} id='status'onChange={(e)=>setTask({...task,status:e.target.value})}required/>
            <label htmlFor="dueDate">Due date:</label>
            <input className='border outline-violet-800 rounded-md p-2 w-full ' id='dueDate' type='date' onChange={(e)=>setTask({...task,dueDate:e.target.value})}required/>
            <label htmlFor="comments">Comments</label>
            <textarea className="border outline-violet-800 rounded-md p-2 w-full" value={task.comments}id='comments'onChange={(e)=>setTask({...task,comments:e.target.value})}required/>
            <button className=" border bg-violet-800 rounded-md text-white cursor-pointer m-auto p-3" type='submit'>Add Task</button>
        </form>
      
    </div>
    <ToDoList taskList={storeTask}/>
      </>
    
  )
}

export default ToDoForm
