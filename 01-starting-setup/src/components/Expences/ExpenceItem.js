import React from "react";

import "./ExpenceItem.scss";
import ExpenceDate from "../Expences/ExpenceDate";
import Card from "../UI/Card";

const ExpenceItem = (props) => {
    // use array destructuring since useState returns an array of 2 elements
    // const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle('Updated!')
    //     console.log(title)
    // }
    return (
        <li>
            <Card className="expense-item">
                <ExpenceDate date={props.date}></ExpenceDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Update</button> */}
            </Card>
        </li>
    );
};

export default ExpenceItem;
