import { NextFunction, Response } from 'express'

export const apiMethods = (_, res: Response, next: NextFunction) => {
   res.apiSuccess = ({
      message = 'Success',
      data,
      status = {
         code: 200,
         success: true,
      },
   }) => {
      res.status(status.code || 200).json({ message, status, data })
   }
   res.apiFail = ({
      message = 'Error Occured',
      error,
      status = {
         code: 400,
         success: false,
      },
   }) => {
      res.status(status.code || 400).json({
         message,
         status: {
            code: status.code || 400,
            success: status.success || false,
         },
         error,
      })
   }
   next()
}
