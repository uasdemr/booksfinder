import React from 'react'

type DropDownProps = {
  options: { value: string, title: string }[]
  value?: string,
  className?: string,
  name?: string
  onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void
}

const DropDown = ({ value, className, name, onChange, options }: DropDownProps) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className={className}
      name={name}
    >
      {options.map(item => <option key={item.value} value={item.value}>{item.title}</option>)}
    </select>
  )
}

export { DropDown }
