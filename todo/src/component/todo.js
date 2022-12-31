import React from 'react'

export default function Todo({todo, setTodo, setEditTodo}) {
    const handleDelete = ({id}) =>{
        setTodo(todo.filter((todo)=> todo.id !==id));
    };
    const handleEdit =({id})=>{
//const filteredItems = array.filter(itemId => item.id !== itemId.id)
const findTodo = todo.find((todo)=> todo.id ===id);
setEditTodo(findTodo)
    }
  return (
    <div>
        {todo.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input
                type="text"
                value ={todo.title}
                className="list"
                onChange={(event)=>event.preventDefault()}
                />
                <div>
                    <button className='button-complete task-button'>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>       
         ))}
    </div>
  )
}
