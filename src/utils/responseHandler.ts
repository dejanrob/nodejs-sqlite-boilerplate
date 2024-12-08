import { Response as ExpressResponse } from "express";

class ResponseHandler {

    public static success(res: ExpressResponse, data: Object = {}, statusCode=200) {
        
        res.status(statusCode).send({
            statusCode,
            success: true,
            data,
            error: null
        });
    }

    public static error(res: any, error: unknown, statusCode=400) {
        
        let message = "Unknown error ocurred";        
        
        if (error instanceof Error) {
            message = error.message;
        }
        
        res.status(statusCode).send({
            code: 400,
            success: false,
            data: null,
            error: message
        });
    }

}

export default ResponseHandler;