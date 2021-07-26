class Counter extends React.Component {

    state = {
        count: 0,
        result: this.props.result,
    }

    handleMathClick(type, number) {
        debugger
        if (type === 'substraction') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if (type === 'resetall') {
            this.setState({
                count: 0,
                result: 0
            })
        } else if (type === 'reset') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0
            }))
        } else if (type === 'add') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleMathClick.bind(this, 'substraction', 10)}>- 10</button>
                <button onClick={this.handleMathClick.bind(this, 'substraction', 1)}>- 1</button>
                <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset result</button>
                <button onClick={this.handleMathClick.bind(this, 'resetall')}>Reset All</button>
                <button onClick={this.handleMathClick.bind(this, 'add', 1)}>+ 1</button>
                <button onClick={this.handleMathClick.bind(this, 'add', 10)}>+ 10</button>
                <h1>Counter: {this.state.count}</h1>
                <h1>Result: {this.state.result}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Counter result="0" />, document.getElementById('root'))
