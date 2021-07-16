import { React, useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterChange={filterChangeHandler}
                    filterValue={filterYear}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
