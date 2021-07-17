import ListGroup from "react-bootstrap/ListGroup";

const TodoItem = (props) => {
    return <ListGroup.Item>{props.item}</ListGroup.Item>;
};

export default TodoItem;
