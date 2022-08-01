import { Item } from "../Item"
import { Quantity } from "../Quantity"

const ItemList = () => {
  return (
    <section className="container mt-3">
      <Quantity />
      <div className="row justify-content-center justify-content-md-start">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  )
}

export { ItemList }
