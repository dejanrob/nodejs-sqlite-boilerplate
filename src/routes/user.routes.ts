import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userController = new UserController();

router.get('/', userController.getAllUsers.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.get('/:id', userController.readById.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));

export default router;