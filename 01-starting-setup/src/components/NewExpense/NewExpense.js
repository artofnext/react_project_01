import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
    const [isShownForm, setIsShownForm] = useState(false);

    const expenseFormSaveHandler = (enteredExpenseData) => {
        const newExpense = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onNewExpense(newExpense)

        hideExpenseForm()
    };

    const showExpenseForm = () => {
        setIsShownForm(true);
    };

    const hideExpenseForm = () => {
        setIsShownForm(false);
    };

    if (!isShownForm) {
        return (
            <div className="new-expense">
                <button onClick={showExpenseForm}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <ExpenseForm
                onCancel={hideExpenseForm}
                onExpenseFormSave={expenseFormSaveHandler}
            />
        </div>
    );
};

export default NewExpense;
