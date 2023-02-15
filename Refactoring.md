# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Explanation
**Problem:** Originally provided function throws unhandled TypeError in case event ot event.partitionKey is function. \
**Solution:** Use String function for stringifying functions instead of JSON.stringify.

**Problem:** Native node.js crypto module used but not prefixed with "node:". \
**Solution:** Prefix import of crypto module with "node:".

**Problem:** Constants are declared inside function. Reinitialized every call, can not be shared with other functions. \
**Solution:** Initialize constants once, outside the function. 

**Problem:** A lot of nested if-else statements. Difficult to read. \
**Solution:** "Flatten" if-else statements by checking for edge cases in advance. Move checks for falsy event and event.partitionKey to the top of the function.  

**Problem:** Hash generation functionality duplication. Not reusable, difficult to read. \
**Solution:** Move hash generation functionality to separate function.

**Problem:** We have custom stringify logic written as if-else statements inside the function. Not reusable, difficult to read. \
**Solution:** Move stringify functionality to separate functions.

**Problem:** We have custom primary key formatting logic written as if-else statements inside the function. Not reusable, difficult to read. \
**Solution:** Move primary key formatting logic functionality to separate functions.
