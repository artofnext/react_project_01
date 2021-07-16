import { React, useState } from "react";

import ExpenceItem from "../Expences/ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.scss";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2020");

    const filterChangeHandler = (inputFilter) => {
        setFilterYear(inputFilter);
        // console.log("Filter set from - to:");
        // console.log(filterYear + " - " + inputFilter);
    };

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filterYear
    );

    let expensesContent = <p>No items match.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenceItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterChange={filterChangeHandler}
                    filterValue={filterYear}
                />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
