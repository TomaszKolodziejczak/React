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
    const { shoppingCart, avalilableProducts } = this.state
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <>
        <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
        <span style={style}>{shoppingCart}</span>
        <button disabled={shoppingCart === avalilableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        {shoppingCart > 0 && <button onClick={this.handleBuyButton}>Buy</button>}
      </>
    )
  }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))