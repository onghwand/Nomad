import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (event) => {setToDo(event.target.value)}
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(toDo)
    if (toDo === ''){
      return 
    }
    setToDos(currentArray => [...currentArray, toDo])
    setToDo('')  
  }
  console.log(toDos)

  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type='text' onChange={onChange} ></input>
        <button>Add TODO</button>
      </form>
      <hr/>
      
      {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
    </div>
    
  );
}

export default App;
