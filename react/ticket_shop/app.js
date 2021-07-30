// const PositiveMsg = () => <p>Go ahead and buy your ticket!</p>;
// const NegativeMsg = () => <p>Sorry, but you're under 16. You can not buy a ticket :(</p>

const ValidationMsg = (props) => <p>{props.msg}</p>

class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    if (!this.isFormSubmitted) {
      e.preventDefault()
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMsg = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMsg msg="Go ahead and buy your ticket!" />
      } else {
        return <ValidationMsg msg="Sorry, but you're under 16. You can not buy a ticket :(" />
      }
    } else { return null }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Get your ticket for the horror of the year</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type='checkbox' id='age' onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
          <label htmlFor='age'> I am 16 or odler</label>
          <br />
          <button>Buy ticket</button>
          {this.displayMsg()}
        </form>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))