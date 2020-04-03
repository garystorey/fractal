const fractal = module.exports = require('@frctl/fractal').create();
/* Set the title of the project */
fractal.set('project.title', 'Test Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');