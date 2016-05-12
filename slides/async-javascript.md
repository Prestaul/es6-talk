# Asynchronous Javascript

When performing IO (saving or retrieving data) there is always a delay.

In Node, there are three main ways we handle slow processes: [demo](examples/async-javascript.js)

- Blocking (synchronous) IO
    - Don't do this...
- Node-style callbacks
- Promises ("thenables")
