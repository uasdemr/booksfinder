import { Book, OneBook } from "./types/book";

export const defaulCard: Book = {
  "kind": '',
  "id": '',
  "etag": '',
  "selfLink": '',
  "volumeInfo": {
    "title": '',
    "authors": [''],
    "publisher": '',
    "publishedDate": '',
    "description": '',
    "industryIdentifiers": [{
      "type": '',
      "identifier": ''
    }],
    "readingModes": {
      "text": false,
      "image": false
    },
    "printType": '',
    "categories": '',
    "maturityRating": '',
    "allowAnonLogging": false,
    "contentVersion": '',
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": '',
      "thumbnail": ''
    },
    "language": '',
    "previewLink": '',
    "infoLink": '',
    "canonicalVolumeLink": ''
  },
  "saleInfo": {
    "country": '',
    "saleability": '',
    "isEbook": false,
    "listPrice": {
      "amount": 0,
      "currencyCode": ''
    },
    "retailPrice": {
      "amount": 0,
      "currencyCode": ''
    },
    "buyLink": '',
    "offers": [
      {
        "finskyOfferType": 0,
        "listPrice": {
          "amountInMicros": 0,
          "currencyCode": ''
        },
        "retailPrice": {
          "amountInMicros": 0,
          "currencyCode": ''
        }
      }
    ]
  },
  "accessInfo": {
    "country": '',
    "viewability": '',
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": '',
    "epub": {
      "isAvailable": false,
      "acsTokenLink": ''
    },
    "pdf": {
      "isAvailable": false,
      "acsTokenLink": ''
    },
    "webReaderLink": '',
    "accessViewStatus": '',
    "quoteSharingAllowed": false
  },
  "searchInfo": {
    "textSnippet": ''
  }
}
export const defaulCard2: OneBook = {
  "kind": '',
  "id": '',
  "etag": '',
  "selfLink": '',
  "volumeInfo": {
    "title": '',
    "authors": [''],
    "publisher": '',
    "publishedDate": '',
    "description": '',
    "industryIdentifiers": [
      {
        "type": '',
        "identifier": '',
      },
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 0,
    "printedPageCount": 0,
    "dimensions": {
      "height": '',
      "width": '',
      "thickness": '',
    },
    "printType": '',
    "categories": '',
    "averageRating": 0,
    "ratingsCount": 0,
    "maturityRating": '',
    "allowAnonLogging": false,
    "contentVersion": '',
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": '',
      "thumbnail": '',
      "small": '',
      "medium": '',
      "large": '',
      "extraLarge": '',
    },
    "language": '',
    "previewLink": '',
    "infoLink": '',
    "canonicalVolumeLink": '',
  },
  "saleInfo": {
    "country": '',
    "saleability": '',
    "isEbook": false
  },
  "accessInfo": {
    "country": '',
    "viewability": '',
    "embeddable": false,
    "publicDomain": false,
    "textToSpeechPermission": '',
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": '',
    "accessViewStatus": '',
    "quoteSharingAllowed": false
  }
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  REQUEST_FAILED = 503,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
