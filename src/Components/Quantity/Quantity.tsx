import cn from 'classnames'

type QuantityProps = {
  totalItems: number,
  align?: string,
  size?: number,
}

const Quantity = ({ totalItems, align = 'center', size=6 }: QuantityProps) => {
  return (
    <p className={
      cn(
        {[`text-${align}`]: align},
        {[`fs-${size}`]: size}
        )
    }
    >Found {totalItems} results</p>
  )
}

export { Quantity }
