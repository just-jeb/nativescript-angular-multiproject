const createNSConfig = require('./webpack.config');

module.exports = (originalAngularConfig, env) => {
    return createNSConfig({...env, android: true, appPath: 'projects/mobile-one/src'});
};
