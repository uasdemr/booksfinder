export type ErrorType = {
  response: {
    data: {
      error: {
        code: number,
        errors: [
          {
            domain: string,
            message: string,
            reason: string,
          }
        ],
        message: string,
      }
    }
  }
}
