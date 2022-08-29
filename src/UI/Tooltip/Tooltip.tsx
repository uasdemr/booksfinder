import React from 'react'
import cn from './Tooltip.module.scss'

type TooltipProps = {
  text: string
}

const Tooltip = ({ text }: TooltipProps) => {
  const newText = text.slice(0, 15)
  return (
    <span className={cn.tooltip}>{newText}
      <span className={cn.tooltiptext}>{text}</span>
    </span>
  )
}

export { Tooltip }
