import jwt from 'jsonwebtoken';

export const loginJwt = (token: any) => {
    if (token) {
        try {
            const decoded = jwt.verify(token, String(process.env.JWT_API_SECRET));
            return decoded;
        } catch (error) {
            return { incorrectLogin: true, statusText: "Dados de login incorretos", status: 401 };
        }
    } else {
        return { login: false, statusText: "É preciso estar logado", status: 401 };
    }
};

export const decode = (token) => {
    return jwt.decode(token);
}