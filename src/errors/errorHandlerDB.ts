import { statusCode } from "../global/utils/binds";

import ApiResponse from "../global/helpers/classes/apiResponse";

export const errorHandlerDB = (code: string | number) => {
    switch (code) {
        case '42P01':
            return new ApiResponse(statusCode.notOk, "Sintaxe/ou tabela com erros, verifique o nome da tabela ou o sql.");
        case '42703':
            return new ApiResponse(statusCode.notOk, "Coluna passada no JSON não contém na tabela da qual está sendo inserida.");
        default:
            return new ApiResponse(statusCode.notFound, "O código " + code + " ainda não cadastrado na api");
    }
}