class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Tea", active: true },
      { id: 2, name: "Coffee", active: true },
      { id: 3, name: "Bread", active: true },
      { id: 4, name: "Cheese", active: true },
      { id: 5, name: "Ham", active: false },
      { id: 6, name: "Sausage", active: true },
      { id: 7, name: "Hot-dog", active: true },
      { id: 8, name: "Apple", active: false },
      { id: 9, name: "Potatoes", active: true },
    ]
  }

  handleChangeStatus = () => {
    console.log('ok')
  }

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
      </>
    );
  }
}
