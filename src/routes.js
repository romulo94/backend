import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/', (req, res) => res.json({ message: 'ok' }));

export default routes;
