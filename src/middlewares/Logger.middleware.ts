import { NextFunction, Response } from 'express';

export function Logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log('Middleware executed');
  console.log('Passing req to service');
  next();
}
