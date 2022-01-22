import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 400;

  //   Takes input from the function as the message
  constructor(public message: string) {
    super(message);
    this.message;

    // Must be done when extending a class built into the language (error)
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
