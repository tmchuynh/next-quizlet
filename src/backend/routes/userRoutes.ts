import { Router, Request, Response } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = Router();

router.post( '/register', registerUser );
router.post( '/login', ( req: Request, res: Response ) => {
    loginUser( req, res );  // Invoke loginUser within a function that conforms to Express handler types
} );

export default router;
