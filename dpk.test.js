const {deterministicPartitionKey} = require("./dpkRefactored");
// Helpers
const {createHash} = require("./utils/createHash");
const {stringify} = require("./utils/stringify");

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const pk = deterministicPartitionKey();
        const expectedPk = "0";
        expect(pk).toBe(expectedPk);
    });
    it("Returns the literal '0' when given falsy input", () => {
        ["", false, 0, null, undefined].forEach(partitionKey => {
            const pk = deterministicPartitionKey(partitionKey);
            const expectedPk = "0";
            expect(pk).toBe(expectedPk);
        })
    });
    it("Returns a hash of a stringified input when provided with truthy input, without partitionKey property", () => {
        ["Test", true, 123, [], {}, () => {}].forEach(partitionKey => {
            const pk = deterministicPartitionKey(partitionKey);
            const expectedPk = createHash(stringify(partitionKey));
            expect(pk).toBe(expectedPk);
        });
    });
    it("Returns a hash of an obj when provided with an object with falsy partitionKey as input", () => {
        ["", false, 0, null, undefined].forEach(partitionKey => {
            const trivialKey = deterministicPartitionKey({partitionKey});
            expect(trivialKey).toBe(createHash(stringify({partitionKey})));
        })
    });
    it("Returns a stringified partitionKey when provided with an object with a truthy (but not string) partitionKey as input", () => {
        [true, 123, [], {}, () => {}].forEach(partitionKey => {
            const trivialKey = deterministicPartitionKey({partitionKey});
            expect(trivialKey).toBe(stringify(partitionKey));
        })
    });
    it("Returns a partitionKey when provided with an object with a string partitionKey (<= 256 chars) as input", () => {
        const partitionKey = "Test";
        const trivialKey = deterministicPartitionKey({partitionKey});
        expect(trivialKey).toBe(partitionKey);
    });
    it("Returns a hash of a partitionKey when provided with an object with string partitionKey (> 256 chars) as input", () => {
        const partitionKey = Array.from({length: 257}).map(() => "T").join("");
        const trivialKey = deterministicPartitionKey({partitionKey});
        expect(trivialKey).toBe(createHash(partitionKey));
    });
});
