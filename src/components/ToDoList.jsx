import React from 'react'
import{Pencil ,Trash}from 'lucide-react'

function ToDoList({taskList}) {
    // fetch tasks from json server

    function handleDelete(e){
        // handle delete of tasks
        console.log(e.target)
        console.log('task deleted')
    }
    function handleEdit(){
        // handle editng of tasks
        console.log('task edited')
    }

    // Place this helper function inside your component, before the return statement
const isOverdue = (dueDateString) => {
  if (!dueDateString) return false;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const targetDate = new Date(dueDateString);
  targetDate.setHours(0, 0, 0, 0);
  
  return targetDate < today;
};

  return (
            <div className='border-violet-800 bg-gray-300 max-w-2xl my-10 mx-auto p-5 rounded-md'>
      <table>
        <thead>
            <tr >
                <th className='text-left  border-b p-4'>Task</th>
                <th className='text-left  border-b p-4'>Status</th>
                <th className='text-left  border-b p-4'>Due by</th>
                <th className='text-left  border-b p-4'>comments</th>
                <th className='text-left  border-b p-4'></th>

            </tr>
        </thead>
                <tbody>
              {taskList.map((task,index)=>(
            <tr key={task.taskNumber||index}>
                <td className='border-b p-4'>{task.taskName}</td>
                <td className='border-b p-4'>{task.status}</td>
                <td className={`border-b p-4 ${isOverdue(task.dueDate) ? 'text-red-600' : 'text-black'}` }>{task.dueDate}</td>
                <td className='border-b p-4'>{task.comments}</td>
                <td className='border-b p-4'>{<><div className='flex p-1'><button type='button'className='rounded-md cursor-pointer m-2'onClick={handleEdit}><Pencil size={24}/></button >
                <button type='button'className='rounded-md cursor-pointer m-2'onClick={handleDelete}><Trash size={24}/></button></div></>}</td>


            </tr>

              ))}
        </tbody>
      </table>
            </div>

  )
}

export default ToDoList

