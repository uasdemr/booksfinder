import { useState } from "react"
import cn from 'classnames'
import { Button } from "../../UI/Button"
import { ButtonGroup } from "../../UI/ButtonGroup"
import styles from './User.module.scss'
import { Text } from "../../UI/Text"
import store from "../../store/store"
import { unSetGapiKey } from "../../store/books-slice"
import { Input } from "../../UI/Input"

type UserPropType = {
  apiKey: string
}
const User = ({ apiKey }: UserPropType) => {
  const [formVisible, setFormVisible] = useState(false)

  const onButtonClickHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFormVisible(!formVisible)
  }

  const formButtonSubmitHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    store.dispatch(unSetGapiKey())
  }

  return (
    <div className={cn("dropdown", styles.user)}>
      <Button
        onClick={onButtonClickHandler}
        type="button"
        className="dropdown-toggle p-0 text-white border-0 bg-transparent"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        User
      </Button>

      <form
        className={cn("dropdown-menu p-4", { 'show': formVisible })}
        style={{ position: "absolute", width: '250px', inset: "0px auto auto 0px", margin: "0px", transform: "translate(-188px, 40px)" }}
      >
        <Text
          text='Google books API key:'
          size={16}
          underline
          bold
        />
        <Input
          onChange={evt => evt.preventDefault()}
          value={apiKey}
          className='form-control outline-0 mb-2'
        />
        <ButtonGroup size="sm">
          <Button
            onClick={formButtonSubmitHandler}
            type="submit"
            className="btn btn-primary"
          >
            LogOut
          </Button>

        </ButtonGroup>
      </form>
    </div>
  )
}

export { User }
