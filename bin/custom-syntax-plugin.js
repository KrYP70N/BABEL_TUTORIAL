// custom-syntax-plugin.js
module.exports = function(babel) {
    const { types: t } = babel;
    console.log('loading')
    return {
      visitor: {
        // Define your syntax transformation logic here
        // This example transforms the keyword "hello" to "console.log('Hello')"
        Identifier(path) {
          if (path.node.name === 'hello') {
            console.logo('....')
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
  