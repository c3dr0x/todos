const baseConfig = require('webpack-focus/config/base');
const envParser = require('webpack-focus/webpack-utilities/env-parser');

const myConfig = baseConfig(process.env, {});

module.exports = myConfig.toWebpackConfig(envParser(process.env));