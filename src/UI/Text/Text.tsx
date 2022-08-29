import { PropsWithChildren } from "react";
import cn from 'classnames'

type TextProps = {
  text: string | string[] | undefined,
  size?: number,
  underline?: boolean,
  bold?: boolean,
  color?: string,
}

const Text: React.FC<PropsWithChildren<TextProps>> = ({ text, size, underline, bold, color }) => {

  return (
    <p
      style={{ fontSize: size ? `${size}px` : '14px', color: color ? color: '' }}
      className={cn('card-text mb-2', {
        'text-decoration-underline': underline,
        'fw-semibold': bold,
      },
      // {[`color: ${color}`]: color}
      )}
    >
      {text}
    </p >
  )
}

export { Text }
