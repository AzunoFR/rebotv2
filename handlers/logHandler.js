/**
###
### File by Sankarsan Kampa (a.k.a k3rn31p4nic)
### Last edition : 06/03/2019; 18:50
###
### LogsHandler script
###
**/

/*** Modules ***/
const COLOR = require('chalk');

/**
 * @function log.warn
 * @param {...string} message
 * @returns {void}
**/
exports.warn = (...message) => {
  console.log(COLOR.yellow('[WARNING]'));
  console.warn(...message);
  console.log(COLOR.yellow('[/WARNING]'));
};

/**
 * @function log.error
 * @param {...string} message
 * @returns {void}
**/
exports.error = (...message) => {
  console.log(COLOR.red('[ERROR]'));
  console.log(...message);
  console.trace();
  console.log(COLOR.red('[/ERROR]'));
};

/**
 * @function log.info
 * @param {...string} message
 * @returns {void}
**/
exports.info = (...message) => {
  console.log(COLOR.cyan('[Kazunori]: ') + COLOR.yellow(...message));
};

/**
 * @function log.message
 * @param {string} message
 * @returns {void}
**/
exports.message = message => {
  console.log(COLOR.cyan('[Kazunori]: ') + message);
};

/**
 * @function log.console
 * @param {...string} message
 * @returns {void}
**/
exports.console = (...message) => {
  console.log(...message);
};

/**
 * @function log.db
 * @param {...string} message
 * @returns {void}
**/
exports.db = (...message) => {
  console.log(COLOR.blue('[DATABASE]'));
  console.log(...message);
  console.trace();
  console.log(COLOR.blue('[/DATABASE]'));
};