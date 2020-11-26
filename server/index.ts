/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */
require('module-alias/register');
// module-alias/register should be always imported first

import express, { Request, Response } from 'express';
import next from 'next';
import services from '../config/services';
import { logger } from '@tools/logger';
import api from './api';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { port } = services;

(async () => {
    try {
        await app.prepare();
        const server = express();
        server.use(express.json());
        server.use('/api', api);
        server.all('*', (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            logger.info(
                `> Ready on localhost:${port} - env ${process.env.NODE_ENV ? process.env.NODE_ENV : '[ Local ]'}`,
            );
        });
    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
})();
