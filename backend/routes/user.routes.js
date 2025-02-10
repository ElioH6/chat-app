import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsers } from '../controllers/user.controllers.js';
import { loggedUser } from '../controllers/loggedUser.controller.js';

const router = express.Router();

router.get("/allUsers", protectRoute, getUsers);
router.get("/loggedUser", loggedUser);

export default router;