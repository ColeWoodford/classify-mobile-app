// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision').v1p3beta1;
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const uri = `./resources/deadpool.png`;

const request = {
  image: {
    content: fs.readFileSync(uri),
  },
  feature: {
    languageHints: ['en-t-i0-handwrit'],
  },
};

client
  .documentTextDetection(request)
  .then(results => {
    const fullTextAnnotation = results[0].fullTextAnnotation;
    const textAnnotations = results[0].textAnnotations;
    console.log(`Full text: ${fullTextAnnotation.text}`);
    // console.log(`Annotations: ${JSON.stringify(textAnnotations,null,4)}`)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });