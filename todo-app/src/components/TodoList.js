import TodoItem from "./TodoItem";
// import ListGroup from "react-bootstrap/ListGroup";

const TodoList = (props) => {
    const setDoneItem = (doneItemId) => {
        props.onDoneChange(doneItemId)
    }
    return (
        <div>
            {props.todos.map((todo) => {
                return <TodoItem onDoneChange={setDoneItem} key={todo.id} item={todo} />;
            })}
        </div>
    );
};

export default TodoList;
