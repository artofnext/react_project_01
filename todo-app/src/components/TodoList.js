import TodoItem from "./TodoItem";
import ListGroup from "react-bootstrap/ListGroup";

const TodoList = (props) => {
    return (
        <ListGroup>
            {props.todos.map((todo) => {
                return <TodoItem item={todo.todo} />;
            })}
        </ListGroup>
    );
};

export default TodoList;
