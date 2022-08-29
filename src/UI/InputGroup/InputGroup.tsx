import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

type InputGroupType = {
  title?: string,
  className?: string,
}

const InputGroup: React.FC<PropsWithChildren<InputGroupType>> = ({ className, children, title }) => {
  return (
    <div
      className={cn('input-group', className)}
    >
      {title && <label className="input-group-text">{title}</label>}
      {children}
    </div>
  )
}

export { InputGroup }
