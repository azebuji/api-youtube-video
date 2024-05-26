import { Login } from '@prisma/client';

import db from '../../database/helpers/connection';
import ApiResponse from '../../global/helpers/classes/apiResponse';



export async function makeLogin(loginBody) {
    const { nameLogin } = loginBody;

    return await db.$transaction(async (trx) => {
        /*
                const data = await trx.login.findUnique({
                    where: {
                        nameLogin: nameLogin,
                    }
                });
        
                return data*/
    })
}
