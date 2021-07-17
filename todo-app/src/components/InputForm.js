import {React, useState} from 'react'

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const InputForm = () => {
    const [enteredTodo, setEnteredTodo] = useState('') 

    const todoChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTodo(event.target.value);
    }

    const todoAddHandler = (event) => {
        event.preventDefault()
        console.log(enteredTodo);
    };
    return (
        <Form onSubmit={todoAddHandler}>
            <InputGroup className="mb-3">
                {/* <InputGroup.Checkbox aria-label="Checkbox for following text input" /> */}
                <FormControl
                    onChange={todoChangeHandler}
                    placeholder="What need to do?"
                    aria-label="Text input with checkbox"
                />
                <Button type='submit'>Add</Button>
            </InputGroup>
        </Form>
    );
};

export default InputForm;
