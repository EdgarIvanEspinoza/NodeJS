// npm - global commands, comes with node
// npm --version

// local dependency - use it only in this particlar project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packagename> (mac)

// manual approach
// npm init
// npm init -y

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
