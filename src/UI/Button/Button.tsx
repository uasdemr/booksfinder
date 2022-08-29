import React from 'react'
import cn from 'classnames'

type ButtonPropsType = {
  type?: "button" | "submit" | "reset" | undefined,
  className?: string,
  disabled?: boolean,
  children: string | JSX.Element
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
  opacity?: number,
}

const Button = ({ children, type = 'button', onClick, className = '', disabled, opacity, ...attrs }: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        className
      )}
      type={type}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </button>
  )
}

export { Button }
