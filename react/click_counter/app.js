class Counter extends React.Component {

  state = {
    count: 0,
    result: this.props.result,
  }

  handleMathClick = (type, number = 1) => {
    // debugger
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

      <>
        <MathButton
          name="- 10"
          number="10"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="- 1"
          number="1"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="Reset"
          type="reset"
          click={this.handleMathClick}
        />
        <MathButton
          name="Reset All"
          type="resetall"
          click={this.handleMathClick}
        />
        <MathButton
          name="+ 1"
          number="1"
          type="add"
          click={this.handleMathClick}
        />
        <MathButton
          name="+ 10"
          number="10"
          type="add"
          click={this.handleMathClick}
        />
        <ResultPanel
          count={this.state.count}
          result={this.state.result}
        />
      </>

      // <React.Fragment>
      //     <button onClick={this.handleMathClick.bind(this, 'subtraction', 10)}>- 10</button>
      //     <button onClick={this.handleMathClick.bind(this, 'subtraction', 1)}>- 1</button>
      //     <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset result</button>
      //     <button onClick={this.handleMathClick.bind(this, 'resetall')}>Reset All</button>
      //     <button onClick={this.handleMathClick.bind(this, 'add', 1)}>+ 1</button>
      //     <button onClick={this.handleMathClick.bind(this, 'add', 10)}>+ 10</button>
      //     <h1>Counter: {this.state.count}</h1>
      //     <h1>Result: {this.state.result}</h1>
      // </React.Fragment>
    )
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.type, number)}>{props.name}</button>
  )
}

const ResultPanel = (props) => {

  return (
    <>
      <h1>Counter: {props.count}</h1>
      <h1>Result: {props.result}</h1>
    </>
  )
}

ReactDOM.render(<Counter result="0" MathButton />, document.getElementById('root'))
