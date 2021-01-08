import express from 'express';
import transform from '../utilities/transform';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/images', (req, res) => {
  // query params from url and typecast as string
  const fileName = (req.query.filename as unknown) as string;
  const widthParam = (req.query.width as unknown) as string;
  const heightParam = (req.query.height as unknown) as string;
  // parse width and height to int
  const width = parseInt(widthParam) || 200;
  const height = parseInt(heightParam) || 200;
  // set thumbnail path
  const thumbPath = path.join(
    __dirname,
    '..',
    '..',
    'assets',
    'thumb',
    `${fileName}_thumb.jpg`
  );

  // check if thumbnail exists (using access checks if file exists without reading)
  fs.access(thumbPath, fs.constants.F_OK, (err) => {
    if (err === null) {
      res.type(`image/jpg`);
      res.sendFile(thumbPath);
    } else {
      // process image and send thumb, else send error to browser
      // Return promise: Sharp returns a Promise <object> which is <unknown> or <void> with TS.
      const process = async (): Promise<unknown> => {
        try {
          // call transform function from transform.*
          const transformImage = await transform(fileName, width, height);

          res.sendFile(thumbPath);
          return transformImage;
        } catch (err) {
          res.send(
            'The following error occured processing your image remedy and try again: ' +
              err
          );
        }
      };
      process();
    }
  });
});

export default router;
