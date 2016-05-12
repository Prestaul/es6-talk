# `let`

Block scoped variables!

- `let` creates block-scoped variables [demo](examples/let.js)
- Can declare multiple variables
- Works with destructuring assignment
- Helpful with inner functions [demo](examples/let-loop.js)
- Will not create a property on the global object
    - This is huge in client-side code
    - Not an issue in CommonJS modules (node)
- Not hoisted (the TDZ) [demo](examples/let-tdz.js)
