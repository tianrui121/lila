
const fs = require('fs');
const rd = require('rd');

const pathInfo = require('../../data/path_info');
const share = require('../../share');
const makeRegExp = require('./reg_exp');

/**
 * Extract `js/css` hash codes from all html files.
 *
 * @returns {Array}
 */
module.exports = () => {
    let hashCodes = [];

    let htmlDirectory = pathInfo.projectRoot + '/dist/html';

    // Find all files and extract hash codes.
    fs.existsSync(htmlDirectory) && rd.eachFileFilterSync(htmlDirectory, file => {
        // File content.
        let content = fs.readFileSync(file);

        let regExp = makeRegExp.extractFromHtml(share.hashDigestLength);
        let result;
        while(result = regExp.exec(content)) {
            hashCodes.push(result[1]);
        }
    });

    return hashCodes;
};
