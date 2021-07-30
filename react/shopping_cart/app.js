class ShoppingCart extends React.Component {
  state = {
    avalilableProducts: 7,
    shoppingCart: 1,
  }

  handleRemoveFromCart = () => {
    this.setState(prevState => ({
      shoppingCart: prevState.shoppingCart - 1,
    }))
  }

  handleAddToCart = () => {
    this.setState(prevState => ({
      shoppingCart: prevState.shoppingCart + 1,
    }))
  }

  render() {
    return (
      <>
        <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
        <span>{this.state.shoppingCart}</span>
        <button disabled={this.state.shoppingCart === this.state.avalilableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
      </>
    )
  }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))