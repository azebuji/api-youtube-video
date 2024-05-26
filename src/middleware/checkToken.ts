import { NextFunction, Request, Response } from "express";

import { verifyToken } from "./verifyToken";

const CheckToken = async (request: Request, response: Response, next: NextFunction) => {
    let verified = await verifyToken(request);

    if (verified) {
        next();
    } else {
        return response.status(401).json({ status: 401, statusText: 'Token inválido' });
    }
}

export default CheckToken