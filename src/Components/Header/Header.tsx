import store from '../../store/store'
import { initialSearch } from '../../store/api-action'
import { clearStore, setCategory, setOrderBy, setUserFind } from '../../store/books-slice'
import { useSearchParams } from 'react-router-dom'
import { Input } from '../../UI/Input'
import { InputGroup } from '../../UI/InputGroup'
import { Button } from '../../UI/Button'
import { DropDown } from '../../UI/DropDown/DropDown'
import { useAppSelector } from '../../hooks/hooks'

import styless from './Header.module.scss'
import cn from 'classnames'
import { Profile } from '../Profile/Profile'

const Header = () => {

  const maxResults = useAppSelector(state => state.books.books.maxResults)
  const orderBy = useAppSelector(state => state.books.books.orderBy)
  const category = useAppSelector(state => state.books.books.category)
  const startIndex = useAppSelector(state => state.books.books.startIndex)
  const apiKey = useAppSelector(state => state.books.books.gapiKey)

  const q = useAppSelector(state => state.books.books.userFind)

  const [searchParams, setSearchParams] = useSearchParams('')

  const makeParamsQuery = (q: string, category: string, orderBy: string, startIndex: number, maxResults: number, key: string) => {
    const queryObject: {
      q: string,
      category: string,
      orderBy: string,
      startIndex: string,
      maxResults: string,
      key?: string
    } = {
      q: q.trim(),
      category,
      orderBy,
      startIndex: String(startIndex),
      maxResults: String(maxResults),
    }

    if (key) {
      queryObject.key = key
    }

    return queryObject
  }

  const onSearchEnterPressHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      evt.preventDefault()
      if (q) {
        const query = makeParamsQuery(q, category, orderBy, startIndex, maxResults, apiKey)
        setSearchParams(query)
        store.dispatch(initialSearch({ q, category, orderBy, startIndex: String(startIndex), maxResults: String(maxResults), apiKey }))
      }
    }
  }

  const onSearchChangeHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    store.dispatch(setUserFind(evt.currentTarget.value))
  }

  const onSearchButtonClickhandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (q) {
      setSearchParams({ q: q.trim(), 'category': category, 'orderBy': orderBy, startIndex: String(startIndex), maxResults: String(maxResults) })
      store.dispatch(initialSearch({ q, category, orderBy, startIndex: String(startIndex), maxResults: String(maxResults) }))
    }
  }

  const onClearButtonClickhandler = () => {
    setSearchParams({})
    store.dispatch(clearStore())
  }

  return (
    <header className={cn('container sticky-top', `${styless.header}`)}>
      <div>
        <Profile apiKey={apiKey} />
        <h1 className="text-center text-white">
          Search for books
        </h1>
        <form action="" onSubmit={evt => evt.preventDefault()}>
          <InputGroup className="mb-3 position-relative">
            <Input
              className="form-control border-0 outline-0"
              placeholder='Search...'
              onKeyDown={onSearchEnterPressHandler}
              onChange={onSearchChangeHandler}
              value={q}
            />
            <Button
              className="input-group-text bg-white"
              onClick={onClearButtonClickhandler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </Button>
            <Button
              className="input-group-text bg-white"
              onClick={onSearchButtonClickhandler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup>
          <div className="row">
            <div className="col mb-3">
              <InputGroup title='Categories'>
                <DropDown
                  className='form-select'
                  value={category}
                  name='categories'
                  onChange={evt => {
                    store.dispatch(setCategory(evt.currentTarget.value))
                  }}
                  options={[
                    { value: 'all', title: 'All' },
                    { value: 'art', title: 'Art' },
                    { value: 'biography', title: 'Biography' },
                    { value: 'computers', title: 'Computers' },
                    { value: 'history', title: 'History' },
                    { value: 'medical', title: 'Medical' },
                    { value: 'poetry', title: 'Poetry' }
                  ]}
                />
              </InputGroup>
            </div>
            <div className="col">
              <InputGroup title='Sorting by'>
                <DropDown
                  value={orderBy}
                  className='form-select'
                  name='sorting'
                  onChange={evt => store.dispatch(setOrderBy(evt.currentTarget.value))}
                  options={[
                    { value: 'relevance', title: 'Relevance' },
                    { value: 'newest', title: 'Newest' },
                  ]}
                />
              </InputGroup>
            </div>
          </div>
        </form>
      </div>
    </header>
  )
}
export { Header }
