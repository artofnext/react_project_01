import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
import "./App.scss";

import InpitForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const DUMMY_TODO = [
    {
      id: '45tr45tdf',
      todo: 'Make something good',
      done: true,
    },
    {
      id: '45tr3245tdf',
      todo: 'Make something else',
      done: false,
    },
  ]

  let todos = DUMMY_TODO

    return (
        <div className="App">
            <Container className="p-3">
                <h1>Todo List</h1>
                <InpitForm />
                <TodoList todos={todos} />
            </Container>
        </div>
    );
}

export default App;
