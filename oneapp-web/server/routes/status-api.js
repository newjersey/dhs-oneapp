"use strict";

const Settings = require('../../Settings');
const appStartedDate = new Date()
const git = require('git-rev');
const requestIp = require('request-ip');

//const util = require('util')
//const getBranch = util.promisify(git.branch);

const getBranch = async () => {
    return new Promise((resolve, reject) => {
        git.branch(function (str) {
            resolve(str);
        })
    });
}


var Status = {

    /**
     * Return with basic application status information:
     *     started the application was started and uptime, in JSON format.
     *     uptime application uptime, in seconds
     *     version the application version
     *     branch the current git branch
     *     commit the current git commit hash
     */
    async get(req, res, next) {
        
        const ver = require('../../package.json').version;
                            
        //let dbStats = await mongoose.connection.db.stats();
        //console.log(dbStats)

        res.json({
            started: appStartedDate,
            uptime: (Date.now() - Number(appStartedDate)) / 1000,
            version: ver, 
            agent: {
                browser: req.useragent.browser,
                browser: req.useragent.version,
                platform: req.useragent.platform,
                os: req.useragent.os,
                isMobile: req.useragent.isMobile,
                isiPad: req.useragent.isiPad,
                isiPhone: req.useragent.isiPhone,
                isAndroid: req.useragent.isAndroid,
                isDesktop: req.useragent.isDesktop,
                source: req.useragent.source
            },
            branch: await getBranch(),
            mode: process.env.SYNAPSE_MODE,
            //name: dbStats.db,
            ip: requestIp.getClientIp(req)
            //headers: req.headers
        });

        
    }
    

}

module.exports = Status