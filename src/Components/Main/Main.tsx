import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import store from "../../store/store"
import { ItemList } from "../ItemList"
import { Quantity } from "../Quantity"
import { ListItem } from "../Item"
import { NoItems } from "../NoItems"
import { ArrowUp } from "../ArrowUp/ArrowUp"
import { showMore } from "../../store/api-action"
import { Button } from "../../UI/Button"
import { ButtonGroup } from "../../UI/ButtonGroup/ButtonGroup"
import { useAppSelector } from "../../hooks/hooks"
import { useScroll } from "../../hooks/useScroll"


const Main = () => {
  const books = useAppSelector(state => state.books.books.books)
  const totalItems = useAppSelector(state => state.books.books.totalItems)
  const isLoading = useAppSelector(state => state.books.books.isLoading)

  const maxResults = useAppSelector(state => state.books.books.maxResults)
  const orderBy = useAppSelector(state => state.books.books.orderBy)
  const category = useAppSelector(state => state.books.books.category)
  const startIndex = useAppSelector(state => state.books.books.startIndex)
  const q = useAppSelector(state => state.books.books.userFind)

  const [searchParams, setSearchParams] = useSearchParams()

  const [arrowVisible, setArrowVisible] = useState(false)

  const scrollY = useAppSelector(state => state.books.books.scrollY)
  const setAppScroll = useScroll()

  const buttonClickHandler = () => {
    setSearchParams({ q: q.trim(), 'category': category, 'orderBy': orderBy, startIndex: String((startIndex + maxResults)), maxResults: String(maxResults) })
    store.dispatch(showMore({ q, category, orderBy, startIndex: String(startIndex + maxResults), maxResults: String(maxResults) }))
  }

  useEffect(() => {
    setAppScroll(scrollY)
    if (scrollY > 1500) {
      setArrowVisible(true)
    } else {
      setArrowVisible(false)
    }
  }, [scrollY, setAppScroll])

  useEffect(() => {
    if (scrollY > 1500) {
      setArrowVisible(true)
    } else {
      setArrowVisible(false)
    }
  }, [scrollY])

  return (
    <>
      <Quantity totalItems={totalItems} align='end' />
      <ItemList data={books} Item={ListItem} NoItems={NoItems} isLoading={isLoading} />
      <ButtonGroup>
        <Button className="btn btn-primary" onClick={buttonClickHandler}>
          Show more
        </Button>
      </ButtonGroup>
      <ArrowUp visible={arrowVisible} />
    </>
  )
}

export { Main }
