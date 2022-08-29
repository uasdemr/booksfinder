import { useAppSelector } from "../../hooks/hooks"
import { Img } from "../../UI/Img/Img"
import { Text } from "../../UI/Text"
import { makeText } from "../../util"

const ItemCard = () => {
  const openBook = useAppSelector(state => state.books.books.openBook)
  {/* запилить новый компонент под этот маршрут из маленьких ui-шных компонентиков */ }

  function createMarkup(tagsString: string) {
    return {__html: tagsString}
  }

  return (
    <section className="container p-0">
      <article className="d-flex flex-column flex-md-row">
        {/* <div className="bg-light p-3 col-4"> */}
        <div className={`col-12 col-md-6 d-flex justify-content-center align-items-center bg-light p-3`}>
          <Img
            // width={200}
            // heigth={300}
            src={openBook.volumeInfo.imageLinks ? openBook.volumeInfo.imageLinks.thumbnail : ''}
            alt={openBook.volumeInfo.title}
          />
        </div>
        {/* Запилить компоненту Текста настраиваемый цвет, что бы он мог быть посерее немного основного */}
        <div className="card-body ms-3 p-3">
          <Text text={makeText(openBook.volumeInfo.categories, null, 'category')} />
          <Text bold text={makeText(openBook.volumeInfo.title, null, 'title')} />
          <Text color="grey" underline text={makeText(openBook.volumeInfo.authors, null, 'author')} />

          <div id="ert" dangerouslySetInnerHTML={createMarkup(openBook.volumeInfo.description)}>

          </div>
          {/* <Text text={openBook.volumeInfo.description} /> */}
        </div>
      </article>
    </section>
  )
}

export { ItemCard }
