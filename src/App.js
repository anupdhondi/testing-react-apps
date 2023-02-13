import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    {
      id: 1,
      title: 'Maths',
      completed: true,
    },
    {
      id: 2,
      title: 'Physics',
      completed: false,
    },
  ];
  return (
    <div className="App">
      {todos.map((el) => (
        <Todo todo={el} />
      ))}
    </div>
  );
}

export default App;
