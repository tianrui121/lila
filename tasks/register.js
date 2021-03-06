
const fs = require('fs');
const path = require('path');

/**
 * Register gulp tasks.
 *
 * @param gulp
 */
module.exports = gulp => {

    // Tasks in pre directory.
    let preDir = __dirname + '/pre';
    fs.readdirSync(preDir).filter(file => {
        let registerTask = require(path.join(preDir, file));

        // Register pre task.
        registerTask(gulp);
    });

    // Tasks in main directory.
    const mainDir = __dirname + '/main';
    fs.readdirSync(mainDir).filter(file => {
        let registerTask = require(path.join(mainDir, file));

        // Register task.
        registerTask(gulp);
    });
};
