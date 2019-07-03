const fs = require('fs');

module.exports = function () {
  const data = fs.readFileSync('./build/entrypoints.json', 'utf8');
  const entrypoints = JSON.parse(data);

  return entrypoints.entrypoints;
};
