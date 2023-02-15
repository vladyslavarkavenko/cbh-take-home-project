const crypto = require("node:crypto");

exports.createHash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");