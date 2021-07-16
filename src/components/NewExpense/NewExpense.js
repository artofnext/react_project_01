import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpense.scss'


const NewExpense = (props) => {
    
    const expenseFormSaveHandler = enteredExpenseData => {
        const newExpense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onNewExpense(newExpense)
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseFormSave={expenseFormSaveHandler} />
        </div>
    )
}

export default NewExpense