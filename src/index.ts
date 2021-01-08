import express from 'express';
import images from './routes/images';

const app = express();
const port = 5000;

// set enpoint
app.use('/api', images);

// check for port to avoid allready in use error testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

export default app;
