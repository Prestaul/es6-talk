# `async`/`await`

Promises simplified.

- `async` causes a function to always return a promise [demo](examples/promise-broken.js)
	- Returned values resolve the promise
	- Can chain by returning another promise
	- Thrown errors cause a rejection
    - Works with arrows and shorthand methods
- `await` waits for a promise to resolve before continuing [demo](examples/await.js)
    - Can only be used in an async function
    - Can be used with or without a resolved value
    - Can dramatically simplify asynchronous calls done in series [demo](examples/await-please.js)
- Errors bubble up until they are caught.
	- Uncaught errors are (still) dropped (relatively) silently
