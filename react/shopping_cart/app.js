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

  handleBuyButton = () => {
    this.setState({
      avalilableProducts: this.state.avalilableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  render() {

    const style = this.state.shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <>
        <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
        <span style={style}>{this.state.shoppingCart}</span>
        <button disabled={this.state.shoppingCart === this.state.avalilableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        {this.state.shoppingCart > 0 && <button onClick={this.handleBuyButton}>Buy</button>}
      </>
    )
  }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))