import { config } from 'dotenv';

config();

export default {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    host: process.env.HOST,
    logsPath: process.env.LOGS_PATH,
};
