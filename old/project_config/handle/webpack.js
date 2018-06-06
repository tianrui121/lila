
const _ = require('lodash');

const staticServerUrl = require('../webpack/static_server_url');
const resolveModules = require('../webpack/resolve_modules');
const outResolveAlias = require('../webpack/out_resolve_alias');
const makeDevConfig = require('../webpack/make_dev_config');
const makeBuildConfig = require('../webpack/make_build_config');
const makeAnalyzeConfig = require('../webpack/make_analyze_config');

module.exports = (config) => {
    // if is multi modules, no more handling
    if (config.multiple) return;

    staticServerUrl(config);
    resolveModules(config);
    outResolveAlias(config);

    config.webpackDevConfig = makeDevConfig(config);
    config.webpackBuildConfig = makeBuildConfig(config);
    config.webpackAnalyzeConfig = makeAnalyzeConfig(config);
};