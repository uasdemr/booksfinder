import { PropsWithChildren, useState } from "react"

import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

type MyTooltipProps = {
  title: string | string[],
  placement?: 'left' | 'top' | 'right' | 'bottom',
  trigger?: 'click' | 'right-click' | 'hover' | 'focus',
}

const MyTooltip: React.FC<PropsWithChildren<MyTooltipProps>> = ({ title = '', placement = 'top', trigger = 'hover', children }) => {

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    trigger: trigger,
    placement: placement,
    closeOnOutsideClick: false,
    delayShow: 1000,
    interactive: true,
    followCursor: true,
  })
  return (
    <>
      <div className="field-info" ref={setTriggerRef}>
        {children}
      </div>

      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          {title ? title : 'No content'}
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        </div>
      )}
    </>
  )
}

export { MyTooltip }
