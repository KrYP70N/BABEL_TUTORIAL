# Plugins

Babel's code transformations are enabled by applying plugins to your [configuration](https://github.com/KrYP70N/BABEL_TUTORIAL/tree/feature/configuration) file.


## Using a Plugin

If the plugin is on `npm`, you can pass in the name of the plugin and Babel will check that it's installed in `node_modules`. This is added to the plugins config option, which takes an array. You can also specify relative path of your plugin.

```
// babel.config.json
{
  "plugins": ["babel-plugin-myPlugin", "./node_modules/asdf/plugin", "@babel/plugin-transform-runtime"]
}
```


## Syntax Plugin

Syntax plugins in Babel allow you to add support for new syntax features or alter existing syntax rules in JavaScript. These plugins are useful for experimenting with new language features or integrating custom syntax into your codebase. Here's a demonstration of how to create and use a simple syntax plugin in Babel:

Inside your project directory, create a new JavaScript file for your custom syntax plugin. Let's name it `custom-syntax-plugin.js`.

```
// custom-syntax-plugin.js
module.exports = function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      // Define your syntax transformation logic here
      // This example transforms the keyword "hello" to "console.log('Hello')"
      Identifier(path) {
        if (path.node.name === 'hello') {
          path.replaceWith(t.callExpression(
            t.memberExpression(
              t.identifier('console'),
              t.identifier('log')
            ),
            [t.stringLiteral('Hello')]
          ));
        }
      }
    }
  };
};
```

Create a `.babelrc` file in your project directory to configure Babel to use your custom plugin:

```
{
  "presets": ["@babel/preset-env"],
  "plugins": ["./custom-syntax-plugin"]
}
```

Create a JavaScript file with some code that uses the custom syntax you defined in your plugin. Let's name it example.js.

```
// example.js
hello;
```











