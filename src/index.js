import express from 'express';
import morgan from 'morgan';

import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app  = express(); // create an express app
const port = 4000;
const logger = morgan('combined');

// Middleware to parse JSON request bodies
app.use(express.json());


const handleProtected = (req, res) => {
    res.send('Welcome to the private lounge');
}

app.use(logger);
app.use('/', globalRouter);
app.get('/protected', handleProtected); 
app.use('/videos', videoRouter);
app.use('/users', userRouter);

// New route to handle the POST request to /post
app.post('/post', (req, res) => {
  console.log(req.body); // log the request data
  res.send('request received'); // send response to client
});

const handleListening = () => console.log(`Server listening on port http://localhost:${port}`)

app.listen(port, handleListening);
