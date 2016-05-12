# Promises

- Creating a promise [demo](examples/promise-new.js)
	- Resolving
	- Rejecting (usually with an Error object)
	- Throwing
- A `promise` is a promise [demo](examples/promise-broken.js)
- Quick promises
    - `Promise.resolve`
    - `Promise.reject`
- Chaining promises [demo](examples/promise-chain.js)
    - `then` returns a new promise
    - errors/rejections bubble up
- Parallel promises
    - `Promise.all`
- Errors in handlers
	- `catch`
- Uncaught errors are dropped (relatively) silently 
