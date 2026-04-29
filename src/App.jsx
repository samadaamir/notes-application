import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [task, setTask] = useState([])

  const submitForm = (e)=>{
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,description})
   
    setTask(copyTask)

    setTitle("")
    setDescription("")

  }
  const deleteNote=(idx)=>{
    const copyTask= [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)

  }


  return (
    <div className='app-container'>

      <form className='form' onSubmit={(e)=>{
        submitForm(e)
      }}>
              <h2>Add Note</h2>
        <input type='text' placeholder='Note Title'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <textarea placeholder='Enter details' value={description}  onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
        <button>Add note</button>
      </form>
      <div className='notes'>
        <h2>Your Notes</h2>
        <div>
        {task.map(function(elem,idx){
          return <div key={idx} className="card">
            <h3>{elem.title}</h3>
            <p>{elem.description}</p>
            <button className='deletebtn' onClick={()=>{
              deleteNote(idx)

            }}>Delete </button>
          </div>

        })}
      </div>
    </div>
    </div>
  )
}

export default App