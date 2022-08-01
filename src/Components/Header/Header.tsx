import { NavLink } from 'react-router-dom'
import styless from './Header.module.scss'

const Header = () => {
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
            <input type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <label className="input-group-text">Categories</label>
                <select className="form-select" name="categories">
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
                <select className="form-select" name="sorting">
                  <option value="relevance ">Relevance </option>
                  <option value="newest ">Newest </option>
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
