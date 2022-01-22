import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

// Capture errors in error handler and process it and return it
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // Return early and not continue running the code
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  //   Sent to the front end
  res.status(400).send({
    errors: [{ message: 'Something went wrong!' }],
  });
};
