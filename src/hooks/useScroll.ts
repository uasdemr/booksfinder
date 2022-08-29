import { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import store from '../store/store'
import { setScrollY } from '../store/books-slice'

const useScroll = () => {

  const updateValue = _.debounce(() => {
    setScroll(Math.round(window.scrollY))
    store.dispatch(setScrollY(Math.round(window.scrollY)))
  }, 400)

  const [scroll, setScroll] = useState(0);

  const onScroll = useCallback(() => {
    updateValue()
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    window.scroll({
      top: scroll,
      behavior: "smooth"
    })
  }, [scroll])

  const setAppScroll = (scrollY: number) => {
    setScroll(Math.round(scrollY))
  }

  return (
    setAppScroll
  )
}

export { useScroll }
