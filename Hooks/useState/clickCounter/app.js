// import React, { useState, Fragment } from 'react';

const Counter = props => {
    const [count, setCount] = React.useState(0);
    const [result, setResult] = React.useState(props.result);

    const handleMathClick = (type, number) => {
        if (type === 'subtraction') {
            setCount(count + 1);
            setResult(result - number);
        } else if (type === 'addition') {
            setCount(count + 1);
            setResult(result + number);
        } else if (type === 'reset') {
            setCount(count + 1);
            setResult(props.result);
        }
    };

    return (
        <React.Fragment>
            <MathButton
                name="-10"
                number="10"
                type="subtraction"
                click={handleMathClick}
            />
            <MathButton
                name="-1"
                number="1"
                type="subtraction"
                click={handleMathClick}
            />
            <MathButton
                name="Reset"
                type="reset"
                click={handleMathClick}
            />
            <MathButton
                name="+1"
                number="1"
                type="addition"
                click={handleMathClick}
            />
            <MathButton
                name="+10"
                number="10"
                type="addition"
                click={handleMathClick}
            />
            <ResultPanel count={count} result={result} />
        </React.Fragment>
    );
}
const MathButton = props => {
    const number = parseInt(props.number);

    return (
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const ResultPanel = props => {
    return (
        <React.Fragment>
            <h1>Clicked: {props.count}</h1>
            <h1>Result: {props.result}</h1>
        </React.Fragment>
    );
};

const startValue = 0;


ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'));