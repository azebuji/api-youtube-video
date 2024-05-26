import { Login } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import ApiResponse from '../../global/helpers/classes/apiResponse';
import { Token } from '../../global/interfaces/Token';



import * as loginRepository from './repository';

export async function makeLogin(login) {

    /* const tokenData = await loginRepository.makeLogin(login);
 
     if (!tokenData || !bcrypt.compareSync(login.password, tokenData.password)) {
         throw new ApiResponse(401, 'Acesso negado');
     }
     const { password, Company, Person, accountType, fkCompany, fkPerson, isActive, nameLogin, uuidLogin } = tokenData;
 
     const token = {
         uuidLogin,
         nameLogin,
         isActive,
         accountType,
         fkPerson,
         fkCompany,
         Person: {
             name: Person.name,
             Company: accountType === 'COMPANY' ? { ...Person.Company, name: Person.name } : {
                 uuidCompany: Company?.uuidCompany,
                 name: Company?.Person.name,
                 dtCreated: Company?.dtCreated,
                 color: Company?.color,
                 image: Company?.image,
                 Plan: Company?.Plan
             }
         },
     };
 
     return jwt.sign(
         {
             ...token
         },
         String(process.env.JWT_API_SECRET),
         {
             expiresIn: '3d',
         },
     );
 */
}


