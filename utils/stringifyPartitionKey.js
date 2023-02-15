const {stringify} = require("./stringify");

exports.stringifyPartitionKey = pk => typeof pk === "string" ? pk : stringify(pk);