import { useState } from "react"
import store from "../../store/store"
import { setGapiKey } from "../../store/books-slice"
import { Button } from "../../UI/Button"
import { Input } from "../../UI/Input"
import cn from 'classnames'
import styles from './LogIn.module.scss'
import { ButtonGroup } from "../../UI/ButtonGroup"

const LogIn = () => {

  const [formVisible, setFormVisible] = useState(false)
  const [gapi, setGapi] = useState('')

  const onButtonClickHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFormVisible(!formVisible)
  }

  const formButtonSubmitHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    store.dispatch(setGapiKey(gapi))
  }

  const onInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setGapi(evt.currentTarget.value)
  }

  return (
    <div className={cn("dropdown", styles.login)}>
      <Button
        onClick={onButtonClickHandler}
        type="button"
        className="dropdown-toggle p-0 text-white border-0 bg-transparent"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        LogIn
      </Button>

      <form
        className={cn("dropdown-menu p-4", { 'show': formVisible })}
        style={{ position: "absolute", width: '250px', inset: "0px auto auto 0px", margin: "0px", transform: "translate(-188px, 40px)" }}
      >
        <div className="mb-3">
          <label htmlFor="login" className="form-label">Enter your Google API Key</label>
          <Input
            onChange={onInputChangeHandler}
            value={gapi}
            type="email"
            className="form-control"
            id="login"
            placeholder="GAPI Key"
          />
        </div>
        <ButtonGroup size="sm">
          <Button
            onClick={formButtonSubmitHandler}
            type="submit"
            className="btn btn-primary"
          >
            Sign in
          </Button>

        </ButtonGroup>
      </form>
    </div>
  )
}

export { LogIn }
