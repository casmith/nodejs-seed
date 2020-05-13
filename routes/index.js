import { Router } from 'express';
import OfficerController from '../controllers/officerController.js';
const routes = Router();
routes.get('/', OfficerController.list);
routes.get('/:id', OfficerController.get);
export default routes;
