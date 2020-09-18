'use strict';

require('./Settings');
const express = require('express');
const Logger = require('./utils/Logger');
const app = express();
const sectionApi = require('./routes/section-api');
const pageApi = require('./routes/page-api');
const fieldApi = require('./routes/field-api');
const middleware = require('./routes/middleware');

const PORT = process.env.API_PORT ? process.env.API_PORT : 5341;

// Add in the middleware
middleware.set(app);

app.get('/sections', sectionApi.getAll);
app.get('/section/:sectionId', sectionApi.loadSection, sectionApi.get);
app.put('/section/:sectionId', sectionApi.loadSection, sectionApi.update);
app.post('/section', sectionApi.create);

app.get('/pages', pageApi.getAll);
app.delete('/page/:pageId', pageApi.loadPage, pageApi.destroy);
app.get('/page/:pageId', pageApi.loadPage, pageApi.getAll);
app.put('/page/:pageId', pageApi.loadPage, pageApi.update);
app.post('/page', pageApi.create);

app.get('/fields', fieldApi.getAll);
app.delete('/field/:pageId', fieldApi.loadField, fieldApi.destroy);
app.get('/field/:fieldId', fieldApi.loadField, fieldApi.getAll);
app.put('/field/:fieldId', fieldApi.loadField, fieldApi.update);
app.post('/field', fieldApi.create);

// API catch all and redirect to 404 page
app.route('*', function(req, res) {
    res.status(404).send({ error: 'Undefined command:' + req.originalUrl });
});

// Start App
middleware.setFinal(app);

// Listen for shut down so we can handle it gracefully
process.on('SIGTERM', function() {
    Logger.info('Closing');
    app.close();
});

app.listen(PORT, function() {
    Logger.info(`Listening on port ${PORT}`);
});


// Export server (handy for running tests against the API)
module.exports = app;

