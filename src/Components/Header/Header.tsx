import { store } from '../../stote/store'
import { fetchBooksAction } from '../../stote/api-action'
import { useState } from 'react'
import { NavLink, useSearchParams, useLocation } from 'react-router-dom'
import styless from './Header.module.scss'
import { useAppSelector } from '../../hooks/hooks'

const Header = () => {
  const startIndex = useAppSelector(state => state.books.startIndex)
  const maxResults = useAppSelector(state => state.books.maxResults)

  const [q, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')

  const [searchParams, setSearchParams] = useSearchParams()

  const onSearchKeyPressHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      evt.preventDefault()
      setSearchParams({ q, 'category': category, 'orderBy': sort, startIndex: String(startIndex), maxResults: String(maxResults) })
      store.dispatch(fetchBooksAction({ q, category, sort, startIndex: String(startIndex), maxResults: String(maxResults) }))
    }
  }

  return (
    <header className={styless.header + ' container'}>
      <div>
        <h1 className="text-center">
          <NavLink className="text-decoration-none text-white" to={'/'}>
            Search for books
          </NavLink>
        </h1>
        <form action="">
          <div className="input-group mb-3">
            <input
              onKeyDown={onSearchKeyPressHandler}
              onChange={evt => setSearch(evt.currentTarget.value)}
              value={q}
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Find"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <label className="input-group-text">Categories</label>
                <select
                  onChange={evt => setCategory(evt.currentTarget.value)}
                  value={category}
                  className="form-select"
                  name="categories"
                >
                  <option value="all">All</option>
                  <option value="art">Art</option>
                  <option value="biography">Biography</option>
                  <option value="computers">Computers</option>
                  <option value="history">History</option>
                  <option value="medical">Medical</option>
                  <option value="poetry">Poetry</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <label className="input-group-text">Sorting by</label>
                <select
                  onChange={evt => setSort(evt.currentTarget.value)}
                  value={sort}
                  className="form-select"
                  name="sorting"
                >
                  <option value="relevance">Relevance </option>
                  <option value="newest">Newest </option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  )
}
export { Header }
