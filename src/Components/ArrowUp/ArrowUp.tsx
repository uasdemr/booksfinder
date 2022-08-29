import { Button } from "../../UI/Button"
import styles from './ArrowUp.module.scss'
import cn from 'classnames'

type ArrowUpPropsType = {
  visible?: boolean
}

const buttonClickHandler = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
}

const ArrowUp = ({ visible = false }: ArrowUpPropsType) => {
  return (
    <div className={cn(styles.arrow_up)}>
      <Button
        opacity={0.2}
        className={cn(
          'btn',
          { ['d-none']: !visible }
        )}
        onClick={buttonClickHandler}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </Button>
    </div>
  )
}

export { ArrowUp }
