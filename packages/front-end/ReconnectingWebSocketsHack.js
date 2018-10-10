// Just use https://github.com/joewalnes/reconnecting-websocket

// reconnecting-websocket
// "postinstall": "node ReconnectingWebSocketsHack.js"
const fse = require('fs-extra');
const packageJsonPath = './node_modules/reconnecting-websocket/package.json';
const packageJson = fse.readJsonSync(packageJsonPath);
if (packageJson['module']) {
  const { 'module': moduleKey, ...remainingJson } = packageJson;
  // packageJson['module'] = undefined;
  // const newPackageJson = JSON.parse(JSON.stringify(packageJson));
  fse.writeJsonSync(packageJsonPath, remainingJson, { spaces: 2, });
}
