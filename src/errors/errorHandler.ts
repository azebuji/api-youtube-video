import { AxiosError } from "axios"

import ApiResponse from "../global/helpers/classes/apiResponse"
import { codeDb } from "./codeHandler.ts"
import { constraintDB } from "./constraintHandler"
import { gatewayHandler } from "./gatewayHandlerCode"

export const errorHandler = async (data: any) => {
    //console.log(data)
    if (data instanceof AxiosError) {
        const status = Number(data.response?.status);
        const message = String(data?.response?.data?.errors ? data.response.data?.errors[0]?.description : data);
        return gatewayHandler(status, message);
    }

    if (data.constraint) {
        return constraintDB(data.constraint)
    }

    if (data.code) {
        return codeDb(data.code, data?.meta?.target)
    }

    if (String(data).includes('in JSON at position')) {
        return new ApiResponse(400, "Json mál formatado");
    }

    if (data.originalStack && process.env.NODE_ENV == 'development') {
        return data.originalStack
    } else {
        return data
    }
}