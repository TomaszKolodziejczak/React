const Header = (props) => {

  // const msg = { props.items.length === 1 ? 'item' : 'items' }
  return (
    <header>
      <h2>TOTAL: ({props.items.length} {props.items.length === 1 ? 'item' : 'items'})</h2>
    </header>
  )
}