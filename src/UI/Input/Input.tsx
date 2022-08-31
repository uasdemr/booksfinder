import React from 'react'

type InputPropsType = {
  id?: string,
  type?: string,
  value?: string,
  placeholder?: string,
  className?: string,
  onKeyDown?: (evt: React.KeyboardEvent<HTMLInputElement>) => void,
  onChange?: (evt: any) => void,
  ariaLabel?: string,
  ariaDescribedby?: string
}

export const Input = ({ type = 'text', value, ...rest }: InputPropsType) => {
  return (
    <input type={type} {...rest} value={value}/>
  )
}
