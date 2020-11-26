import jwt from 'jsonwebtoken';
import serviceConfig from '@config/services';

export interface DataEmailToken {
    email: string;
    eventId: string;
    requestedBy: string;
}

export interface DataToken {
    email: string;
    eventId?: string;
}
export const generateToken = async (data: DataToken, expiresIn = 86400 * 4) => {
    return jwt.sign(data, serviceConfig.jwtSecret, { expiresIn });
};

export const decodeToken = async (token) => {
    return jwt.decode(token);
};

export const verifyToken = async (token) => {
    return jwt.verify(token, serviceConfig.jwtSecret);
};
