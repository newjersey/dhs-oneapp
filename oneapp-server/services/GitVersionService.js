const { execSync } = require('child_process');
const fs = require('fs');

let COMMIT_HASH;
let COMMIT_DATE;

const service = {

  fetchCommitHash: () => {
    if (!COMMIT_HASH) {
      const commitHash = process.env.NODE_ENV !== 'production' ? execSync('git rev-parse HEAD') : fs.readFileSync('COMMIT_HASH', 'utf8');
      COMMIT_HASH = commitHash.toString().trim();
    }
    return COMMIT_HASH;
  },
  fetchCommitDate: () => {
    if (!COMMIT_DATE) {
      const commitDate = process.env.NODE_ENV !== 'production' ? execSync('git log -1 --format=%ct') : fs.readFileSync('COMMIT_DATE', 'utf8');
      const commitDateString = commitDate.toString().trim();
      const commitDateInt = parseInt(commitDateString, 10);
      COMMIT_DATE = new Date(commitDateInt * 1000);
    }
    return COMMIT_DATE;
  },

};

module.exports = service;
