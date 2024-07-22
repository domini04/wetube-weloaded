import express from 'express';
import {watch, trending, see, edit, remove } from '../controllers/videoController';

const videoRouter = express.Router();
const handleVideo = (req, res) => {
    res.send('Watch Video');
}


videoRouter.get('/watch/:id(\\d+)', watch);
videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/trending', trending);
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/remove', remove);

export default videoRouter;