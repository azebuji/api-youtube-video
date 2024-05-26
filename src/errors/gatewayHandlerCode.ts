import ApiResponse from "../global/helpers/classes/apiResponse";
import { statusCode } from "../global/utils/binds";

export const gatewayHandler = (status: statusCode, message?: string) => {
    switch (status) {
        case 405:
            return new ApiResponse(statusCode.notFound, "Rota não encontrada");
        default:
            return new ApiResponse(statusCode.notOk, message ? message : "Erro na api externa");
    }
}