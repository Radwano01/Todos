
import { useSelector } from 'react-redux';
import './App.css';
import Todos from './components/Todos';
import TodosCheck from './components/TodosCheck';

function App() {
  const state = useSelector(state => state.todosstore.todos)
  return (
    <>
      <h1>Todos-list</h1>
      <div className="App">
        
        <Todos/>

        {state?.map((data)=>{
          return(
            <TodosCheck key={data.id} title={data.title} check={data.check}/>
          )
        })}
        
      </div>
    </>

  );
}

export default App;
