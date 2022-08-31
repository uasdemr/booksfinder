import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import store from '../../store/store';
import { fetchBookAction } from '../../store/api-action';

import { Img } from '../../UI/Img/Img';
import { Text } from '../../UI/Text';
import { MyTooltip } from '../../UI/Tooltip/MyTooltip';
import { makeText } from '../../util';
import { ItemProps } from '../../types/book';

const ListItem = ({ book, isHorizontal }: ItemProps) => {
  const onImgClick = () => {
    store.dispatch(fetchBookAction({ id: book.id }))
  }

  const [category, setCategory] = useState<string | string[] | undefined>('')
  const [title, setTitle] = useState<string | string[] | undefined>('')
  const [authors, setAuthors] = useState<string | string[] | undefined>('')
  const [description, setDescription] = useState<string | string[] | undefined>('')

  useEffect(() => {
    if (isHorizontal) {
      setCategory(makeText(book.volumeInfo.categories, null, 'category'))
      setTitle(makeText(book.volumeInfo.title, null, 'title'))
      setAuthors(makeText(book.volumeInfo.authors, null, 'author'))
      setDescription(makeText(book.volumeInfo.description, 210, 'description'))

    } else {
      setCategory(makeText(book.volumeInfo.categories, 13, 'category'))
      setTitle(makeText(book.volumeInfo.title, 12, 'title'))
      setAuthors(makeText(book.volumeInfo.authors, 13, 'author'))

    }
  }, [book, isHorizontal])

  return (
    <article className={"col-12 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-4"}>
      <div className={`card card-body border-0  bg-light flex-row flex-sm-column`}>
        <div
          className={`d-flex justify-content-sm-center flex-shrink-0 pb-1`}
        >
          <NavLink
            onClick={() => { onImgClick() }}
            to={book.id}
          >
            <Img
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
              alt={book.volumeInfo.title}
              shadow
            />
          </NavLink>
        </div>
        <div className={`ms-3 ms-sm-0 mt-sm-2`}>
          <MyTooltip title={book.volumeInfo.categories}>
            <Text text={category} underline />
          </MyTooltip>
          <MyTooltip title={book.volumeInfo.title}>
            <Text text={title} bold />
          </MyTooltip>
          <MyTooltip title={book.volumeInfo.authors}>
            <Text text={authors} />
          </MyTooltip>
          {isHorizontal && <MyTooltip title={book.volumeInfo.description}>
            <Text text={description} />
          </MyTooltip>}
        </div>
      </div>
    </article>
  )
}

export { ListItem }
