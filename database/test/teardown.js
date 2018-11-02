/* eslint no-underscore-dangle: 0 */

module.exports = async function() {
  await global.__MONGOD__.stop();
};
