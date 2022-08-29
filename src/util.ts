export const stringFromArr = (arr: string[] = []) => {
  if (!Array.isArray(arr)) return ''
  if (Array.isArray(arr)) {
    const str = arr.join(', ')
    return str.length ? str : ''
  }
}

export const cropString = (str: string | string[] | undefined = '', length: number | null = 0) => {
  if (typeof str === 'string' && str.length) {
    if (length) {
      return str.length > length ? str.slice(0, length) + '...' : str
    } else {
      return str
    }
  }
}

export const makeAuthor = (value: string | string[]) => {
  if (typeof value === 'string') return
  if (typeof value === 'object') {
    return value.join(' ')
  } else {
    return 'No author'
  }
}

export const makeText = (text: string | string[] | undefined, length: number | null = 0, variant?: string) => {
  switch (variant) {
    case 'category':
      return Array.isArray(text) ? cropString(stringFromArr(text), length) : 'No category'
    case 'title':
      return text ? cropString(text, length) : 'No title'
    case 'author':
      return Array.isArray(text) ? cropString(makeAuthor(text), length) : 'No author'
    case 'description':
      return text ? cropString(text, length) : 'No description'
    default:
      return text
  }
}
