const PositiveMsg = () => <p>Go ahead and buy your ticket!</p>;
const NegativeMsg = () => <p>You're under 16. You can not buy a ticket :(</p>

class CheckboxAgeConfiguration extends React.Component {

  state = {
    isConfirmed: false,
  }
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }
  displayMsg = () => {
    if (this.state.isConfirmed) {
      return <PositiveMsg />
    } else {
      return <NegativeMsg />
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Get your ticket for the horror of the year</h1>
        <input type='checkbox' id='age' onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
        <label htmlFor='age'> I am 16 or odler</label>
        {this.displayMsg()}

      </React.Fragment>
    )
  }
}

ReactDOM.render(<CheckboxAgeConfiguration />, document.getElementById('root'))