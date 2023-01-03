const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    projectName : process.env.PROJECT_NAME,
    buildName : process.env.BUILD_NAME,
    localIdentifier : process.env.LOCAL_IDENTIFIER,
    username: process.env.username,
    accessKey: process.env.access-key
}