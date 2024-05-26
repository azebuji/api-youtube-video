import ApiResponse from '../global/helpers/classes/apiResponse';
import { statusCode } from '../global/utils/binds';

type keyProps = "empty" | "onlyAdm" | "onlyInLogin" | "genericError";
const clientErrorHandler = (key: keyProps) => {

    const erros = {

        "empty": new ApiResponse(statusCode.ok, "Não há dados"),
        "onlyAdm": new ApiResponse(statusCode.unauthorized, "Seu usuário não possui permissão para esta ação"),
        "onlyInLogin": new ApiResponse(statusCode.unauthorized, "É necessário estar logado."),
        "genericError": new ApiResponse(statusCode.notOk, "Ocorreu um erro, entre em contato com o administrador do sistema.")
    }

    if (key in erros) {
        return erros[key]
    } else {
        return new ApiResponse(statusCode.notFound, `Chave "${key}" não cadastrada no arquivo clentErrorHandler`);
    }
}

export default clientErrorHandler;