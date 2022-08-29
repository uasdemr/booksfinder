import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useDocumentWidth } from "../../hooks/useDocumentWidth"
import { ItemListProps } from "../../types/book"

const ItemList = ({ data = [], Item, NoItems }: ItemListProps) => {

  useDocumentWidth()
  const innerWindow = useAppSelector(state => state.books.books.innerWindow)
  const [isHorizontal, setIsHorizontal] = useState(false)
  const MINIMAL_WIEV_SIZE = 576

  useEffect(() => {
  if(innerWindow < MINIMAL_WIEV_SIZE) {
    setIsHorizontal(true)
  } else {
    setIsHorizontal(false)
  }
  }, [innerWindow])

  return !data.length ? (<NoItems />) : (
    <div
      className="row justify-content-center justify-content-md-start"
    >
      {
        data.map(item => <Item key={item.id} book={item} isHorizontal={isHorizontal} />)
      }
    </div>

  )
}

export { ItemList }
