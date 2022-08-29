import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

type ButtonGroupPropsType = {
  className?: string,
  vertical?: boolean,
  size?: string,
}

const ButtonGroup: React.FC<PropsWithChildren<ButtonGroupPropsType>> = ({ className, children, vertical, size }) => {
  return (
    <div
      className={cn(className,
        { 'btn-group': !vertical },
        { 'btn-group-vertical': vertical },
        { [`btn-group-${size}`]: size },
      )}
    >
      {children}
    </div>
  )
}

export { ButtonGroup }
