import React from "react";
import Header  from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";


//const name = 'rashi'
function App(){
  const [showAddTask, setAddTask] = useState(false)
    const [tasks, setTask]= useState([])

useEffect(() =>{
  const getTasks = async() =>{
    const taksFromServer = await fetchTasks()
    setTask(taksFromServer)
  }
  getTasks()
}, [])//empty array


//fatch tasks 
const fetchTasks = async ()=>{
  const res = await fetch("http://localhost:8080/tasks")
  const data = await res.json()

  return data
}

//fatch task 
const fetchTask = async (id)=>{
  const res = await fetch(`http://localhost:8080/tasks/${id}`)
  const data = await res.json()

  return data
}
//Add task
  const addTask= async(task)=>{  
    const res = await fetch("http://localhost:8080/tasks",{
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setTask([...tasks, data])
    
    
    
  //add task function 
  // const id = Math.floor(Math.random() // to generate any random id for the taks
  // *10000) + 1
  // const newTask = {id, ...task} // using spread operator
  // setTask([...tasks, newTask])
}
//delete task
const deleteTask=async (id)=>{
await fetch(`http://localhost:8080/tasks/${id}`,{
method: 'DELETE'

})
  setTask(tasks.filter((task) => task.id !==id)) //filter krdiya whic id is not equal to 
}
//toggle Task
const toggleReminder= async(id) =>{
const taskToToggle = await fetchTask(id)
const updTask = { ...taskToToggle,
reminder: !taskToToggle.reminder
}
const res = await fetch(`https://localhost:8080/tasks/${id}`,{
  method:'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body:JSON.stringify(updTask)
})

const data = await res.json()


   setTask(
     tasks.map((task)=>
     task.id=== id? { ...task, reminder:
     !data.reminder}: task 
   )
   )
}
  return (
    <Router>
    <div className="container">
    <Header onAdd={() => setAddTask(!showAddTask)} 
    showAdd={showAddTask}
    />
    <Route
    path='/'
    exact render={(props) => (
      <>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Task tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder} />
      ): (
        "No Task TO Show"
      )}
      </>
    )} />

    <Route path='/about' component={About}/>
    <Footer />
    </div>
    </Router>
  )
    }

export default App;