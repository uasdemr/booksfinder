import store from '../store/store'
import _ from 'lodash'
import { useCallback, useEffect } from 'react'
import { setInnerWindow } from '../store/books-slice'

const useDocumentWidth = () => {

  const updateValue = _.debounce(() => {
    store.dispatch(setInnerWindow(window.innerWidth))
  }, 150)

  const onResize = useCallback(() => {
    updateValue()
  }, []);


  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

}

export { useDocumentWidth }
