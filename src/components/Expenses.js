import ExpenceItem from "./ExpenceItem";
import "./Expenses.scss"

function Expenses(props) {
    return (
        <div className="expenses">
            <ExpenceItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenceItem>
            <ExpenceItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenceItem>
            <ExpenceItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            ></ExpenceItem>
            <ExpenceItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            ></ExpenceItem>
        </div>
    );
}

export default Expenses
