import express from 'express';
import {login, join} from '../controllers/globalController';

const globalRouter = express.Router();
const handleHome = (req, res) => {  
  res.send('Hello from home');
}

globalRouter.get('/', handleHome);
globalRouter.get('/login', login);
globalRouter.get('/join', join);

export default globalRouter;