class ShoppingList extends React.Component {

    state = {
        item1: "Fruits",
        item2: "Veges",
        item3: "Drinks"
    }

    render() {
        return (
            <>
                <h1>Shopping List: </h1>
                <ol>
                    <ItemList name={this.state.item1} stock={3 + 2} />
                    <ItemList name={this.state.item2} />
                    <ItemList name={this.state.item3} />
                </ol>
            </>
        )
    }
}

// const ItemList = (props) => {
//     return (
//         <li>{props.name}</li>
//     )
// }

const ItemList = props => (
    <li>{props.name} - {props.stock}</li>
)


ReactDOM.render(<ShoppingList />, document.getElementById('root'))
