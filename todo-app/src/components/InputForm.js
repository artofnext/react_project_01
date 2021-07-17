import { React, useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const generateId = () => {
    return Date.now().toString().slice(8) + Math.floor(Math.random() * 1000);
};

const InputForm = (props) => {
    const [enteredTodo, setEnteredTodo] = useState('');

    const todoChangeHandler = (event) => {
        setEnteredTodo(event.target.value);
    };

    const todoAddHandler = (event) => {
        event.preventDefault();
        const todo = {
            id: generateId(),
            todo: enteredTodo,
            done: false,
        };
        props.onAddTodo(todo);

        setEnteredTodo('')
    };
    return (
        <Form onSubmit={todoAddHandler}>
            <InputGroup className="mb-5">
                {/* <InputGroup.Checkbox aria-label="Checkbox for following text input" /> */}
                <FormControl
                    value={enteredTodo}
                    onChange={todoChangeHandler}
                    placeholder="What need to be done?"
                    aria-label="Text input with checkbox"
                />
                <Button type="submit">Add</Button>
            </InputGroup>
        </Form>
    );
};

export default InputForm;
