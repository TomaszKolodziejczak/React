// import { useState } from React;

const App = () => {

    const [text, setText] = React.useState('')
    // const handleOnClick = () => setText(text + 'a');
    const handleOnClick1 = () => setText(`${text}a`)

    const [value, setValue] = React.useState('');
    const handleOnChange = event => setValue(event.target.value);
    const handleOnClick = () => setValue('');


    return (
        <React.Fragment>
            <button onClick={handleOnClick1}>Add 'A'</button>
            <h1>{text}</h1>
            <hr />
            <input
                value={value}
                placeholder="Enter"
                onChange={handleOnChange}
                type="text"
            />
            <button onClick={handleOnClick} >Reset</button>
            <h1>{value.toUpperCase()}</h1>
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))