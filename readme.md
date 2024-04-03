# BABEL

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
- Source code transformations (codemods)
- And more! (check out these videos for inspiration)

```
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);
// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```


## Pluggable

Babel is built out of plugins. Compose your own transformation pipeline using existing plugins or write your own. Easily use a set of plugins by using or creating a `preset`.

You can use standard plugin template by using `[generator-babel-plugin](https://github.com/babel/generator-babel-plugin)`


## CONTENTS

[Overview](https://github.com/KrYP70N/BABEL_TUTORIAL/tree/feature/overview)

