import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/', (req, res) => res.json({ message: 'ok' }));

export default routes;
