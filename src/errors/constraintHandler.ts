import ApiResponse from "../global/helpers/classes/apiResponse";
import { statusCode } from "../global/utils/binds";

export const constraintDB = (constraint: string) => {
    switch (constraint) {
        case '':
            return new ApiResponse(statusCode.conflict, "");
        default:
            return new ApiResponse(statusCode.notFound, "Constraint " + constraint + " ainda não cadastrada");
    }
}