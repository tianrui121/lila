
"use strict";

module.exports = {
    resolveAlias: {
        base: 'alias/base',
        common: 'alias/common'
    },
    resolveModules: [
        '../modules'
    ],
    directoriesToSync: {
        images: 'images',
        fonts: 'fonts'
    },
    moduleGroup: {
        test: [
            'test-3/index',
            'test-4/index'
        ]
    },
    provide: {
        jQuery: 'jquery'
    },
    // staticServerUrl: '/sub',
    // staticServerUrl: 'http://www.example.com',
    // staticServerUrl: 'https://www.example.com/sub',
    // staticServerUrl: '//www.example.com/sub/subSub',
    // minJs: !0,
    // minCss: !0,
    // minHtml: !0,
    // backupHtml: !0,
    // htmlReplace: {
    //     DOCTYPE: 'doctype'
    // },
    // htmlInsert: {
    //     start: '<!-- start -->',
    //     end: '<!-- end -->'
    // },
    // htmlExtension: 'jsp',
    envOptions: [
        // 0
        {},
        // 1
        {
            recordFileChanges: !1,
            renameHtml: {
                'test/index': 'parent/inner/index',
                'test-2/index': 'parent/inner/index-2',
                'test-3/index': 'parent/inner/index-3',
                'test-5/index': 'parent/inner/index-5'
            }
        }
    ],
    devServerPort: 8091,
    analyzerPort: 8191,
    localOptions: {
        senn: {
            staticServerUrl: 'https//github.com/senntyou/lila'
        }
    }
};

