import express from 'express';
import {login, edit, remove, see} from '../controllers/userController';

const userRouter = express.Router();
const handleUser = (req, res) => {
  if (req.url === '/edit') {
    res.send('Edit User');
  }
  if (req.url === '/delete') {
    res.send('Delete User');
  }
}

userRouter.get('/edit', edit);
userRouter.get('/delete', handleUser);
userRouter.get('/login', login);
userRouter.get('/remove', remove);
userRouter.get('/:id', see);

export default userRouter;