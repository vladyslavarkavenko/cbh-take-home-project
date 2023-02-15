const {createHash} = require("./createHash");

const MAX_PARTITION_KEY_LENGTH = 256;
exports.formatPartitionKey = str => str.length > MAX_PARTITION_KEY_LENGTH ? createHash(str) : str;