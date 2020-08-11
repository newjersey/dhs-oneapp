'use strict';

const express = require('express');
const Logger = require('./common/utils/Logger');
const app = express();
const userApi = require('./api-user/index.js');
const middleware = require('./common/routes/middleware');
const schedule = require('node-schedule');
const PORT = process.env.PORT ? process.env.PORT : 5001;
const Nightly = require('./nightly');
const Hourly = require('./hourly');

// Add in the middleware
middleware.set(app);

app.use('/user', userApi);

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

var server = app.listen(PORT, function() {
    Logger.info(`Listening on port ${PORT}`);
});


// https://www.npmjs.com/package/node-schedule

if (process.env.RUN_CRON_JOBS == 'true'){

    Logger.info("MASTER NODE: RUNNING CRON JOBS....")

    // Nightly tasks
    // TODO: only run from one server! Use a env flag to do that?
    var j = schedule.scheduleJob({hour: 23, minute: 55}, async ()=>{
        Logger.debug('RUNNING NIGHTLY.....')
        await Nightly.run();
    });

    var j = schedule.scheduleJob({minute: 5}, async ()=>{
        Logger.debug('RUNNING HOURLY.....')
        await Hourly.run();
    });

}


// Export server (handy for running tests against the API)
module.exports = app;

