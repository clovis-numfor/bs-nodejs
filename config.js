const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    projectName : process.env.BROWSERSTACK_PROJECT_NAME,
    buildName : process.env.BROWSERSTACK_BUILD_NAME,
    localIdentifier : process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
    username: process.env.BROWSERSTACK_USERNAME,
    accessKey: process.env.BROWSERSTACK_ACCESS_KEY
}