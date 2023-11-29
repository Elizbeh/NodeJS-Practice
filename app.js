// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project any project
// npm i <packageName>

// global dependency - use it in any project
// npm install -l <packageName>
// global -g <packageName> (mac)

// packege.json - manifest file (stores important info about the project/package)
// manual aproach (create package.json file in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')
const items = [1, [2, [3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)