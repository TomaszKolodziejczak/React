// import { useState } from React;

const App = () => {

    const [counter, setCounter] = React.useState(0)

    return (
        <div>
            <h1>States in functional component</h1>
            <p>Value of state: {counter}</p>
        </div>
    );
}

// export default App;

ReactDOM.render(<App />, document.getElementById('root'))