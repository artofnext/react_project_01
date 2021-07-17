import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
import "./App.scss";

import InpitForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const DUMMY_TODO = [
    {
        id: "45tr45tdf",
        todo: "Make something good",
        done: true,
    },
    {
        id: "45tr3245tdf",
        todo: "Make something else",
        done: false,
    },
    {
        id: "45tdf",
        todo: "Make something good",
        done: true,
    },
    {
        id: "5tr5tdf",
        todo: "Make something else",
        done: true,
    },
];
function App() {
    const [todoList, setTodoList] = useState(DUMMY_TODO);

    const addNewTodo = enteredTodo => {
        setTodoList(previousTodoList => 
            [enteredTodo, ...previousTodoList]
        );
    };

    const changeDoneStatus = (doneId) => {
      console.log("In App")
              setTodoList((previousTodoList) => {
                return previousTodoList.map((elem) => {
                    if (elem.id === doneId) {
                        elem.done = !elem.done;
                        console.log("Elem id " + elem.id)
                        console.log("Elem done " + elem.done)
                    }
                    return elem;
                });
              });
              console.log(doneId)
    }
    return (
        <div className="App">
            <Container className="p-3">
                <h1>Todo List</h1>
                <InpitForm onAddTodo={addNewTodo} />
                <TodoList onDoneChange={changeDoneStatus} todos={todoList} />
            </Container>
        </div>
    );
}

export default App;
