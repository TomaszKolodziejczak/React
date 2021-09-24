const ShoppingList = () => {

    const [items] = React.useState({
        item1: "Fruits",
        item2: "Veges",
        item3: "Drinks"
    })

    return (
        <>
            <h1>Shopping List: </h1>
            <ol>
                <ItemList name={items.item1} stock={3 + 2} />
                <ItemList name={items.item2} />
                <ItemList name={items.item3} />
            </ol>
        </>
    )
}


// const ItemList = (props) => {
//     return (
//         <li>{props.name}</li>
//     )
// }

const ItemList = ({ name, stock }) => (
    <li>{name} - {stock}</li>
)


ReactDOM.render(<ShoppingList />, document.getElementById('root'))
