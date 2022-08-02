import styless from './Item.module.scss'
import book from './fomm.jpg'
import { NavLink, useParams } from 'react-router-dom'
import classNames from 'classnames';
import { Categories } from '../Categories/Categories';

const Item = () => {
  let { bookId } = useParams();
  return (
    <article className={classNames({
      ["col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"]: !bookId,
      ["col-md-12"]: bookId,
    })}>
      <div className={classNames("card border-0 justify-content-center bg-light", {
        ["flex-row bg-white"]: bookId
      })}>
        <div className={classNames("img-wrapper text-center pt-5 pb-5", {
          ["bg-light"]: bookId
        })}>
          {bookId ?
            <img src={book} className={"card-img-top w-75"} alt="..." />
            : <NavLink
              className="text-decoration-none text-black"
              to={'123'}
            >
              <img src={book} className={"card-img-top w-75"} alt="..." />
            </NavLink>
          }
        </div>
        <div className="card-body">
          <Categories />
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Autho name</p>
          <p className="card-text">Description</p>
        </div>
      </div>
    </article>
  )
}

export { Item }
