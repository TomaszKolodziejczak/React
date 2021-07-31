const Header = (props) => {

  const activeItems = props.items.filter(item => item.active)
  const itemOrItems = activeItems.length === 1 ? 'item' : 'items'
  const number = activeItems.length
  return (
    <header>
      <h2>TOTAL: ({number} {itemOrItems})</h2>
      <h2>$ {number ? `${number * 10}` : "You don't buy, you don't pay"}</h2>
    </header>
  )
}