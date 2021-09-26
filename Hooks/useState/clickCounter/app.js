const ADDITION = 'addition';
const RESET = 'reset';
const SUBTRACTION = 'subtraction';

const Counter = props => {
    const [count, setCount] = React.useState(0);
    const [result, setResult] = React.useState(props.result);

    const handleMathClick = (type, number) => {
        if (type === SUBTRACTION) {
            setCount(count + 1);
            setResult(result - number);
        } else if (type === ADDITION) {
            setCount(count + 1);
            setResult(result + number);
        } else if (type === RESET) {
            setCount(count + 1);
            setResult(props.result);
        }
    };

    return (
        <React.Fragment>
            <MathButton
                name="-10"
                number={10}
                type={SUBTRACTION}
                click={handleMathClick}
            />
            <MathButton
                name="-1"
                number={1}
                type={SUBTRACTION}
                click={handleMathClick}
            />
            <MathButton
                name="Reset"
                type={RESET}
                click={handleMathClick}
            />
            <MathButton
                name="+1"
                number={1}
                type={ADDITION}
                click={handleMathClick}
            />
            <MathButton
                name="+10"
                number={10}
                type={ADDITION}
                click={handleMathClick}
            />
            <ResultPanel count={count} result={result} />
        </React.Fragment>
    );
}
const MathButton = ({ click, name, number, type }) => {
    const handleOnClick = () => click(type, number);
    return (
        <button onClick={handleOnClick}>{name}</button>
    )
}

const ResultPanel = ({ count, result }) => {
    const additionalInfo =
        count > 9
            ? <span>Your first 10 clicks</span>
            : null;
    return (
        <React.Fragment>
            <h2>Clicked: {count}</h2>
            <h3>Result: {result}</h3>
            {additionalInfo}
        </React.Fragment>
    );
};

const startValue = 0;


ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'));