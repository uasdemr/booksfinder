import styless from './Item.module.scss'
import book from './fomm.jpg'
import { NavLink, useParams } from 'react-router-dom'
import classNames from 'classnames';
import { Categories } from '../Categories/Categories';

const Item = () => {
  let { bookId } = useParams();
  console.log(bookId);

  // Запилить классы компонента используя classNames, что бы в
  // момент открытия карточки каталога, карточка меняла вид
  // и отличалась от той, что представлена в ItemList
  return (
    <article className={classNames({
      ["col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"]: !bookId,
      ["col-md-12"]: bookId,
    })}>
      <div className={classNames("card border-0 justify-content-center", {
        ["flex-row"]: bookId
      })}>
        <div className="img-wrapper text-center bg-light pt-5 pb-5">
          <NavLink
            className="text-decoration-none text-black"
            to={'123'}
          >
            <img src={book} className={"card-img-top w-75"} alt="..." />
          </NavLink>
        </div>
        <div className="card-body">
          <Categories />
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Autho name</p>
          <p className="card-text">Description</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </article>
  )
}

export { Item }
