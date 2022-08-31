export type ItemProps = {
  book: Book | OneBook,
  isHorizontal?: boolean,
}

export type ItemListProps = {
  data: Book[],
  isLoading: boolean,
  Item: ({ book }: ItemProps) => JSX.Element,
  NoItems: () => JSX.Element
}

export type FetchBooksPropsType = {
  q: string,
  category: string,
  orderBy: string,
  startIndex: string,
  maxResults: string,
  apiKey?: string
}

export type FetchBookPropsType = {
  id: string
}

export type GetBooksType = {
  items: Book[],
  kind: string,
  totalItems: number,
}

export type Book = {
  "kind": string,
  "id": string,
  "etag": string,
  "selfLink": string,
  "volumeInfo": {
    "title": string,
    "authors": [string],
    "publisher": string,
    "publishedDate": string,
    "description": string,
    "industryIdentifiers": [
      {
        "type": string,
        "identifier": string
      },
    ],
    "readingModes": {
      "text": boolean,
      "image": boolean
    },
    "printType": string,
    "categories": string,
    "maturityRating": string,
    "allowAnonLogging": boolean,
    "contentVersion": string,
    "panelizationSummary": {
      "containsEpubBubbles": boolean,
      "containsImageBubbles": boolean
    },
    "imageLinks": {
      "smallThumbnail": string,
      "thumbnail": string
    },
    "language": string,
    "previewLink": string,
    "infoLink": string,
    "canonicalVolumeLink": string
  },
  "saleInfo": {
    "country": string,
    "saleability": string,
    "isEbook": boolean,
    "listPrice": {
      "amount": number,
      "currencyCode": string
    },
    "retailPrice": {
      "amount": number,
      "currencyCode": string
    },
    "buyLink": string,
    "offers": [
      {
        "finskyOfferType": number,
        "listPrice": {
          "amountInMicros": number,
          "currencyCode": string
        },
        "retailPrice": {
          "amountInMicros": number,
          "currencyCode": string
        }
      }
    ]
  },
  "accessInfo": {
    "country": string,
    "viewability": string,
    "embeddable": boolean,
    "publicDomain": boolean,
    "textToSpeechPermission": string,
    "epub": {
      "isAvailable": boolean,
      "acsTokenLink": string
    },
    "pdf": {
      "isAvailable": boolean,
      "acsTokenLink": string
    },
    "webReaderLink": string,
    "accessViewStatus": string,
    "quoteSharingAllowed": boolean
  },
  "searchInfo": {
    "textSnippet": string
  }
}

export type OneBook = {
  "kind": string,
  "id": string,
  "etag": string,
  "selfLink": string,
  "volumeInfo": {
    "title": string,
    "authors": [string],
    "publisher": string,
    "publishedDate": string,
    "description": string,
    "industryIdentifiers": [
      {
        "type": string,
        "identifier": string,
      },
    ],
    "readingModes": {
      "text": boolean,
      "image": boolean
    },
    "pageCount": number,
    "printedPageCount": number,
    "dimensions": {
      "height": string,
      "width": string,
      "thickness": string,
    },
    "printType": string,
    "categories": string,
    "averageRating": number,
    "ratingsCount": number,
    "maturityRating": string,
    "allowAnonLogging": boolean,
    "contentVersion": string,
    "panelizationSummary": {
      "containsEpubBubbles": boolean,
      "containsImageBubbles": boolean
    },
    "imageLinks": {
      "smallThumbnail": string,
      "thumbnail": string,
      "small": string,
      "medium": string,
      "large": string,
      "extraLarge": string,
    },
    "language": string,
    "previewLink": string,
    "infoLink": string,
    "canonicalVolumeLink": string,
  },
  "saleInfo": {
    "country": string,
    "saleability": string,
    "isEbook": boolean
  },
  "accessInfo": {
    "country": string,
    "viewability": string,
    "embeddable": boolean,
    "publicDomain": boolean,
    "textToSpeechPermission": string,
    "epub": {
      "isAvailable": boolean
    },
    "pdf": {
      "isAvailable": boolean
    },
    "webReaderLink": string,
    "accessViewStatus": string,
    "quoteSharingAllowed": false
  }
}


export type AppState = {
  books: Book[],
  totalItems: number,
  userFind: string,
  category: string,
  orderBy: string,
  isLoading: boolean,
  startIndex: number,
  maxResults: number,
  openBook: OneBook,
  scrollY: number,
  innerWindow: number,
  gapiKey: string,
}
