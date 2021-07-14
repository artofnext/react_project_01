import "./ExpenceItem.scss";

function ExpenceItem() {
    return (
        <div className="expense-item">
            <div>March</div>
            <div className="expense-item__description">
                <h2>Car</h2>
                <div className="expense-item__price">$200</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
