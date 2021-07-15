import "./ExpenceItem.scss";
import ExpenceDate from "../Expences/ExpenceDate";
import Card from "../UI/Card"

const ExpenceItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date}></ExpenceDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenceItem;
