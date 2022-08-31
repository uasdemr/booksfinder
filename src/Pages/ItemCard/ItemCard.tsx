import { useAppSelector } from "../../hooks/hooks"
import { Img } from "../../UI/Img/Img"
import { Text } from "../../UI/Text"
import { makeText } from "../../util"
import cn from 'classnames'
import styles from './ItemCard.module.scss'

const ItemCard = () => {
  const openBook = useAppSelector(state => state.books.books.openBook)

  function createMarkup(tagsString: string) {
    return { __html: tagsString }
  }

  return (
    <section className="container p-0">
      <article className="d-flex flex-column flex-md-row">
        <div className={`col-12 col-md-4 d-flex justify-content-center align-items-center bg-light p-3`}>
          <Img
            src={openBook.volumeInfo.imageLinks ? openBook.volumeInfo.imageLinks.thumbnail : ''}
            alt={openBook.volumeInfo.title}
          />
        </div>
        <div className="card-body p-3 pb-0">
          <Text text={makeText(openBook.volumeInfo.categories, null, 'category')} />
          <Text bold text={makeText(openBook.volumeInfo.title, null, 'title')} />
          <Text color="grey" underline text={makeText(openBook.volumeInfo.authors, null, 'author')} />
          {openBook.volumeInfo.description && <div className={cn("border ps-3 pe-3 pt-2 pb-2", styles.overflow)} dangerouslySetInnerHTML={createMarkup(openBook.volumeInfo.description)}></div>}
        </div>
      </article>
    </section>
  )
}

export { ItemCard }
