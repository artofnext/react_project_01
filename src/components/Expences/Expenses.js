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
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterChange={filterChangeHandler}
                    filterValue={filterYear}
                />
                {props.items
                    .filter(
                        (expense) => expense.date.getFullYear().toString() === filterYear
                    )
                    .map((expense) => (
                        <ExpenceItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
            </Card>
        </div>
    );
};

export default Expenses;
