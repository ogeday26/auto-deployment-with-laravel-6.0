let bluebird = require('bluebird');
redis = require('redis');

let redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000
});

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000
});

const getKeyValue = key => {
  return redisClient
    .getAsync(key)
    .then((res, err) => (err ? Promise.reject('getKeyValue : ' + err) : Promise.resolve(res)));
};

const setKeyValue = (key, value) => {
  return redisClient
    .setAsync(key, value, 'EX', 60 * 60 * 12)
    .then((res, err) => (err ? Promise.reject('setkeyvalue : ' + err) : Promise.resolve(res)));
};

const doesKeyExist = key => {
  return redisClient
    .existsAsync(key)
    .then((res, err) => (!res || err ? Promise.resolve(false) : Promise.resolve(res)));
};

const deleteKey = key => {
  return redisClient
    .delAsync(key)
    .then((res, err) => (res ? Promise.resolve(res) : Promise.reject('deleteKey :' + err)));
};

module.exports = { getKeyValue, setKeyValue, doesKeyExist, deleteKey };
