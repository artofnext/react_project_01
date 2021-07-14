import ExpenceItem from "./ExpenceItem";
import "./Expenses.scss"

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenceItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenceItem>
            <ExpenceItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenceItem>
            <ExpenceItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenceItem>
            <ExpenceItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenceItem>
        </div>
    );
}

export default Expenses
