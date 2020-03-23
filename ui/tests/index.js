const dotenv = require('dotenv');
const path = require('path');

function getEnvFilePath() {
    return path.resolve(
        process.cwd(),
        '.env' + (process.env.TEST_ENV ? '.' + process.env.TEST_ENV : '')
    );
}

(function() {
    dotenv.config({
        path: getEnvFilePath()
    });
})();
