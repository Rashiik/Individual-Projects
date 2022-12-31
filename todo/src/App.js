import { useState , useEffect} from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import Todo from './component/todo';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todo"))|| [];
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(()=>{
      localStorage.setItem("todo", JSON.stringify(todo));
    },[todo])
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div> <Header />
        </div>
      <div>
        <Form 
        input ={input}
        setInput={setInput}
        todo = {todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
        <div>
          <Todo todo={todo} setTodo={setTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
