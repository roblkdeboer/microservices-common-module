export abstract class CustomError extends Error {
  //   Muist implement a status code
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  // SerializeErrors must be defined and return a message and optionally a field
  abstract serializeErrors(): { message: string; field?: string }[];
}
