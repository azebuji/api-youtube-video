import ApiResponse from "../global/helpers/classes/apiResponse";
import { checkName } from "../global/helpers/functions/checkName";
import { statusCode } from "../global/utils/binds";

export const codeDb = (code: string, meta) => {

    switch (code) {
        case 'P2002':
            return new ApiResponse(statusCode.conflict, checkName(meta[0]));
        case 'P2025':
            return new ApiResponse(statusCode.notFound, 'O registro não existe');
        default:
            return new ApiResponse(statusCode.notFound, "Código " + code + " ainda não cadastrado, entre em contato com o administrador do sistema.");
    }
}