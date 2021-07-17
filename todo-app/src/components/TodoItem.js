import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const TodoItem = (props) => {
    const checkboxChangeHandler = (event) => {
        event.preventDefault()
        props.onDoneChange(props.item.id)
        console.log('Todo Item')
        console.log(props.item.id);
    }
    return (

            <InputGroup className="mb-3">
                <InputGroup.Checkbox onChange={checkboxChangeHandler} checked={props.item.done} aria-label="Checkbox for following text input" />
                <FormControl
                readOnly={true}
                    value={props.item.todo}
                    aria-label="Text input with checkbox"
                />
                <Button variant='danger'>Delete</Button>
            </InputGroup>

    );
};

export default TodoItem;
