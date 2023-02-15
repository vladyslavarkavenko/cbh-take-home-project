// Helpers
const {stringify} = require("./utils/stringify");
const {createHash} = require("./utils/createHash");
const {formatPartitionKey} = require("./utils/formatPartitionKey");
const {stringifyPartitionKey} = require("./utils/stringifyPartitionKey");

const TRIVIAL_PARTITION_KEY = "0";

exports.deterministicPartitionKey = (event) => {
    if (!event) {
        return TRIVIAL_PARTITION_KEY;
    }
    if (!event.partitionKey) {
        return createHash(stringify(event));
    }
    return formatPartitionKey(stringifyPartitionKey(event.partitionKey));
};
