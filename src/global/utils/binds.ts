
export enum statusCode {
    ok = 200,
    created = 201,
    notUpdated = 202,
    notOk = 400,
    unauthorized = 401,
    notFound = 404,
    notAllowded = 405,
    conflict = 409,
    crashError = 500
}

export const uuidRegExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;