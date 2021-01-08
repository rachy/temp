import sharp from 'sharp';

// Async Sharp format returns Promise<object> (Promise<void> with TS)
const transform = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  const path = `./assets/full/${filename}.jpg`;

  try {
    await sharp(path)
      // Resize then send file to thumb folder
      .resize(width, height)
      .toFile(`./assets/thumb/${filename}_thumb.jpg`);
  } catch (err) {
    console.log('error at sharp processing: ' + err);
    throw err;
  }
};

export default transform;
