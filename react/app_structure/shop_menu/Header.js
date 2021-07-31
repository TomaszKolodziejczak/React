const Header = (props) => {

  const activeItems = props.items.filter(item => item.active)
  const itemOrItems = activeItems.length === 1 ? 'item' : 'items'

  return (
    <header>
      <h2>TOTAL: ({activeItems.length} {itemOrItems})</h2>
      <h2>$ {activeItems.length * 10}</h2>
    </header>
  )
}