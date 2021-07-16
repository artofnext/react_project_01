import { React, useState } from "react";

import ExpenceItem from "../Expences/ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.scss";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2020");

    const filterChangeHandler = (inputFilter) => {
        setFilterYear(inputFilter);
        console.log("Filter set from - to:");
        console.log(filterYear + " - " + inputFilter);
    };
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter
                onFilterChange={filterChangeHandler}
                filterValue={filterYear}
            />
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
            </Card>
        </div>
    );
};

export default Expenses;
