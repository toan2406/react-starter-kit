const sass = require('node-sass');
const path = require('path');

module.exports = function processSass(data, filename) {
  const result = sass.renderSync({
    data: data,
    file: filename
  }).css;
  return result.toString('utf8');
};
