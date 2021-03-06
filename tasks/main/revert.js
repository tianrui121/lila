
const fsExtra = require('fs-extra');
const decompress = require('decompress');

const pathInfo = require('../../data/path_info');
const revertShare = require('../../share/revert');


/**
 * Register `revert` task.
 * @param gulp
 */
module.exports = gulp => {

    gulp.task('revert', cb => {
        let distPath = pathInfo.projectRoot + '/dist';

        // Remove old `dist` directory.
        fsExtra.removeSync(distPath);

        /**
         * Zip file name.
         *
         * Default sequence is from old to new, but actually want the reverse, from new to old.
         */
        revertShare.revertZip = revertShare.packages[revertShare.packages.length - revertShare.index];

        decompress(pathInfo.projectRoot + '/' + revertShare.revertZip, distPath).then(files => {
            cb();
        });
    });
};
