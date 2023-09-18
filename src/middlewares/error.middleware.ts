import httpStatus from 'http-status';
import { ErrorObj } from '../protocols/errors.protocols';
import { NextFunction } from 'connect';
import {Request, Response} from 'express';

export default function errorHandler(error: ErrorObj, _req: Request, res: Response, _next: NextFunction) {
    console.log(error);

    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    if (error.type === "invalidData") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "badreq") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.type === "tooMany"){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }


    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}