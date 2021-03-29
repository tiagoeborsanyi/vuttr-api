import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-aalow-origin', '*')
  res.set('access-control-aalow-headers', '*')
  res.set('access-control-aalow-methods', '*')
  next()
}
